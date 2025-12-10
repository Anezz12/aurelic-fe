"use client";

import { useEffect, useState } from "react";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
  useWatchContractEvent,
} from "wagmi";
import { CONTRACT_CONFIGS } from "@/lib/contracts/addresses";

export const useFaucet = () => {
  const { address } = useAccount();
  const [isMinting, setIsMinting] = useState(false);
  const [mintHash, setMintHash] = useState<`0x${string}` | undefined>(
    undefined
  );
  const [balanceBeforeMint, setBalanceBeforeMint] = useState<bigint | null>(
    null
  );
  const [hasUpdatedBalance, setHasUpdatedBalance] = useState(false);
  const isAwaitingBalanceUpdate = !!mintHash && !hasUpdatedBalance;

  // Get USDC balance and keep it in sync
  const { data: usdcBalance, refetch: refetchBalance } = useReadContract({
    ...CONTRACT_CONFIGS.MOCK_USDC,
    functionName: "balanceOf",
    args: [address as `0x${string}`],
    query: {
      enabled: !!address,
      refetchOnWindowFocus: true,
    },
  });

  const { writeContractAsync: mintAsync } = useWriteContract();

  // Wait for tx confirmation then refresh balance
  const { isLoading: isMintingTx, isSuccess: isMintingSuccess } =
    useWaitForTransactionReceipt({
      hash: mintHash,
      confirmations: 1,
    });

  // Reset minting state on success
  useEffect(() => {
    if (isMintingSuccess) {
      refetchBalance();
      setIsMinting(false);
      // allow success banner only after balance reflects change
      if (usdcBalance !== undefined && usdcBalance !== null) {
        try {
          const current = BigInt(usdcBalance as bigint);
          if (balanceBeforeMint !== null && current > balanceBeforeMint) {
            setHasUpdatedBalance(true);
          }
        } catch {
          // ignore parse errors
        }
      }
    }
  }, [isMintingSuccess, balanceBeforeMint, usdcBalance, refetchBalance]);

  // When balance changes independently (event listener), mark update
  useEffect(() => {
    if (
      mintHash &&
      !hasUpdatedBalance &&
      balanceBeforeMint !== null &&
      usdcBalance !== undefined &&
      usdcBalance !== null
    ) {
      try {
        const current = BigInt(usdcBalance as bigint);
        if (current > balanceBeforeMint) {
          setHasUpdatedBalance(true);
        }
      } catch {
        // ignore parse errors
      }
    }
  }, [mintHash, hasUpdatedBalance, balanceBeforeMint, usdcBalance]);

  // Listen to Transfer events to refresh balance quickly, in case receipt polling lags
  useWatchContractEvent({
    ...CONTRACT_CONFIGS.MOCK_USDC,
    eventName: "Transfer",
    args: { to: address },
    enabled: !!address,
    onLogs: () => {
      refetchBalance();
      setIsMinting(false);
    },
  });

  const handleMint = async () => {
    if (!address) return;
    setIsMinting(true);
    setHasUpdatedBalance(false);
    if (usdcBalance !== undefined && usdcBalance !== null) {
      try {
        setBalanceBeforeMint(BigInt(usdcBalance as bigint));
      } catch {
        setBalanceBeforeMint(null);
      }
    } else {
      setBalanceBeforeMint(null);
    }

    try {
      // Mint 1000 USDC (1000 * 10^6 = 1,000,000,000)
      const amount = BigInt(1000 * 10 ** 6);
      const txHash = await mintAsync({
        ...CONTRACT_CONFIGS.MOCK_USDC,
        functionName: "mint",
        args: [address, amount],
        gas: BigInt(200000), // Set reasonable gas limit for mint
      });
      setMintHash(txHash);
    } catch (error) {
      console.error("Mint error:", error);
      setIsMinting(false);
    }
  };

  const resetStates = () => {
    setIsMinting(false);
    setMintHash(undefined);
    setHasUpdatedBalance(false);
  };

  const isBusy = isMinting || isMintingTx || isAwaitingBalanceUpdate;

  return {
    usdcBalance,
    isMinting,
    isBusy,
    handleMint,
    resetStates,
    refetchBalance,
    mintHash,
    hasUpdatedBalance,
  };
};
