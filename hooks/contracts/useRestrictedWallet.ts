import { useState, useEffect, useCallback } from "react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useReadContract,
} from "wagmi";
import { parseUnits, formatUnits } from "viem";
import { RESTRICTED_WALLET_ABI } from "@/lib/contracts/abis/restricted-wallet-abi";
import { useUserLoanInfo } from "./useLoan";
import { CONTRACT_CONFIGS } from "@/lib/contracts/addresses";
import { COMMON_TOKENS } from "@/components/wallet/tokens";

interface TransactionState {
  status: "idle" | "pending" | "success" | "error";
  hash?: string;
  error?: string;
}

export const useRestrictedWallet = () => {
  const { loanInfo } = useUserLoanInfo();
  const [withdrawTx, setWithdrawTx] = useState<TransactionState>({
    status: "idle",
  });

  // Get restricted wallet address from loan info
  const restrictedWalletAddress = loanInfo?.restrictedWallet || null;
  const hasRestrictedWallet = !!(
    restrictedWalletAddress &&
    restrictedWalletAddress !== "0x0000000000000000000000000000000000000000"
  );
  const loanIsActive = loanInfo?.isActive || false;

  // Get checks
  const { data: maxWithdrawableUSDC, refetch: refetchMaxUSDC } = useReadContract({
    address: restrictedWalletAddress as `0x${string}`,
    abi: RESTRICTED_WALLET_ABI,
    functionName: "getMaxWithdrawableUSDC",
    query: { enabled: !!restrictedWalletAddress },
  });

  // Withdraw transaction
  const { writeContract: withdrawFromWallet, data: withdrawHash } =
    useWriteContract();
  const {
    isLoading: isWithdrawing,
    isSuccess: isWithdrawSuccess,
    isError: isWithdrawError,
    error: withdrawErrorObj
  } = useWaitForTransactionReceipt({ hash: withdrawHash });

  // Update withdraw transaction state
  useEffect(() => {
    if (withdrawHash) {
      setWithdrawTx({ status: "pending", hash: withdrawHash });
    }
  }, [withdrawHash]);

  useEffect(() => {
    if (isWithdrawSuccess) {
      setWithdrawTx((prev) => ({ ...prev, status: "success" }));
      refetchMaxUSDC();
    }
  }, [isWithdrawSuccess, refetchMaxUSDC]);

  useEffect(() => {
    if (isWithdrawError) {
      console.error("Withdraw receipt error:", withdrawErrorObj);
      setWithdrawTx((prev) => ({
        ...prev,
        status: "error",
        error: "Withdrawal failed on-chain",
      }));
    }
  }, [isWithdrawError, withdrawErrorObj]);

  // Get token balance in restricted wallet
  // Custom hook for balance checking
  const useRestrictedWalletBalance = (tokenAddress: string) => {
    return useReadContract({
      address: tokenAddress as `0x${string}`,
      abi: [
        {
          name: "balanceOf",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "account", type: "address" }],
          outputs: [{ name: "", type: "uint256" }],
        },
      ],
      functionName: "balanceOf",
      args: restrictedWalletAddress
        ? [restrictedWalletAddress as `0x${string}`]
        : undefined,
      query: { enabled: !!restrictedWalletAddress },
    });
  };

  // Withdraw specific amount from restricted wallet
  const withdrawToken = useCallback(
    async (tokenAddress: string, amount: string, decimals: number) => {
      if (!restrictedWalletAddress) {
        throw new Error("No restricted wallet found");
      }

      // Client-side validation for USDC
      const isUSDC = tokenAddress.toLowerCase() === COMMON_TOKENS[0].address.toLowerCase();
      if (isUSDC && loanIsActive) {
        const amountBigInt = parseUnits(amount, decimals);
        if (maxWithdrawableUSDC !== undefined && amountBigInt > maxWithdrawableUSDC) {
           throw new Error(`Cannot withdraw more than ${formatUnits(maxWithdrawableUSDC, 6)} USDC while loan is active`);
        }
      }

      setWithdrawTx({ status: "idle" });
      try {
        const amountBigInt = parseUnits(amount, decimals);
        await withdrawFromWallet({
          address: restrictedWalletAddress as `0x${string}`,
          abi: RESTRICTED_WALLET_ABI,
          functionName: "withdraw",
          args: [tokenAddress as `0x${string}`, amountBigInt],
        });
      } catch (err: unknown) {
        console.error("Withdraw error:", err);
        const errorMessage =
          err instanceof Error ? err.message : "Withdrawal failed";
        setWithdrawTx({ status: "error", error: errorMessage });
      }
    },
    [restrictedWalletAddress, loanIsActive, maxWithdrawableUSDC, withdrawFromWallet]
  );

  // Withdraw all tokens from restricted wallet
  const withdrawAllTokens = useCallback(
    async (tokenAddress: string) => {
      if (!restrictedWalletAddress) {
        throw new Error("No restricted wallet found");
      }

      setWithdrawTx({ status: "idle" });
      try {
        // We use type(uint256).max to indicate "all", but the contract takes specific amount.
        // Or strictly speaking, the previous code used max uint256. 
        // The contract checks balance. If we pass max uint, contract might fail because it tries to transfer amount.
        // Wait, RestrictedWallet.withdraw(token, amount) -> IERC20(token).safeTransfer(msg.sender, amount);
        // It does NOT handle type(uint256).max automatically unless the token supports it, but RestrictedWallet uses SafeERC20.
        // However, most implementations of withdrawAll usually read balance first.
        // The previous implementation used BigInt(2) ** BigInt(256) - BigInt(1). 
        // Let's stick to reading balance first to be safe, or just utilize the previous logic if it worked.
        // Actually, passing MaxUint to a transfer function usually fails if you don't have that much balance.
        // The contract does:
        // if (token != usdcToken) IERC20(token).safeTransfer(msg.sender, amount);
        // So we MUST pass the exact balance.
        
        // Let's rely on the caller to pass the balance OR fetch it here?
        // Fetching here is async. 
        // For now, let's keep the previous implementation but note that it might be risky if the contract doesn't cap it.
        // Checking RestrictedWallet.sol:
        // if (currentBalance < amount) revert InvalidAmount(); (Lines 281 for USDC)
        // For Non-USDC: IERC20(token).safeTransfer(msg.sender, amount); -> Will fail if amount > balance.
        
        // SO THE PREVIOUS IMPLEMENTATION WAS LIKELY BUGGY if it passed MaxUint.
        // I will change it to require explicit amount or handle it better.
        // Actually, let's remove withdrawAllTokens and just use withdrawToken with the full balance from the UI.
        
        // But for backward compatibility if I can't check balance here easily without a read...
        // I will just keep `withdrawToken` and let the UI handle "Max".
        throw new Error("Use withdrawToken with full balance instead");
        
      } catch (err: unknown) {
        console.error("Withdraw all error:", err);
        setWithdrawTx({ status: "error", error: "Use withdrawToken" });
      }
    },
    [restrictedWalletAddress]
  );

  const resetTransactionState = useCallback(() => {
    setWithdrawTx({ status: "idle" });
  }, []);

  // Get loan manager stats for additional context
  const { data: loanStats } = useReadContract({
    ...CONTRACT_CONFIGS.LOAN_MANAGER,
    functionName: "getLoanStats",
    args: [],
  });

  return {
    restrictedWalletAddress,
    hasRestrictedWallet,
    loanIsActive,
    canWithdraw: hasRestrictedWallet, // Always true if wallet exists, specific limits apply to USDC
    maxWithdrawableUSDC: maxWithdrawableUSDC || BigInt(0),
    useRestrictedWalletBalance,
    withdrawToken,
    withdrawTx,
    isWithdrawing,
    resetTransactionState,
    loanStats: loanStats
      ? {
          totalLoansCreated: loanStats[0],
          totalLoansRepaid: loanStats[1],
          activeLoans: loanStats[2],
        }
      : null,
  };
};
