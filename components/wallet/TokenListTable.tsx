import React from "react";
import { formatUnits } from "viem";
import { COMMON_TOKENS, TokenConfig } from "./tokens";

export interface TokenBalance {
  token: TokenConfig;
  balance: bigint;
  formatted: string;
}

interface ItemProps {
  token: TokenBalance;
  onOpenWithdraw: (token: TokenBalance) => void;
  isUSDC: boolean;
}

const TokenRow: React.FC<ItemProps> = ({
  token,
  onOpenWithdraw,
  isUSDC,
}) => {
  // Mock price for now as requested
  const price = isUSDC ? "1.00" : token.token.symbol === "ETH" ? "2,450.00" : token.token.symbol === "BTC" ? "42,000.00" : "-";
  
  return (
    <div className="grid grid-cols-12 gap-4 items-center py-4 border-b border-[rgba(245,200,16,0.1)] last:border-0 hover:bg-white/5 transition-colors px-4 rounded-lg">
      {/* Token Info */}
      <div className="col-span-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#F5C810] border border-[#F5C810]/20 font-bold">
            {token.token.symbol[0]}
        </div>
        <div>
          <div className="font-medium text-white" style={{ fontFamily: "Space Grotesk" }}>
            {token.token.symbol}
          </div>
          <div className="text-xs text-[#A3A3A3]" style={{ fontFamily: "Space Grotesk" }}>
            {token.token.name}
          </div>
        </div>
      </div>

      {/* Balance */}
      <div className="col-span-3">
        <div className="text-white font-normal" style={{ fontFamily: "Space Grotesk" }}>
          {token.formatted}
        </div>
      </div>

      {/* Price */}
      <div className="col-span-3">
        <div className="text-white font-normal" style={{ fontFamily: "Space Grotesk" }}>
          ${price}
        </div>
      </div>

      {/* Action */}
      <div className="col-span-2 text-right">
        <button
          onClick={() => onOpenWithdraw(token)}
          className="text-xs font-medium bg-[#F5C810]/10 text-[#F5C810] border border-[#F5C810]/30 hover:bg-[#F5C810] hover:text-black transition-all px-4 py-2 rounded uppercase tracking-wider transform active:scale-95"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

interface TokenListProps {
  tokens: TokenBalance[];
  onOpenWithdraw: (token: TokenBalance) => void;
}

export const TokenListTable: React.FC<TokenListProps> = ({
  tokens,
  onOpenWithdraw,
}) => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg border border-[rgba(245,200,16,0.15)] overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white/5 border-b border-[rgba(245,200,16,0.15)] text-sm text-[#A3A3A3]" style={{ fontFamily: "Space Grotesk" }}>
            <div className="col-span-4">Asset</div>
            <div className="col-span-3">Balance</div>
            <div className="col-span-3">Price</div>
            <div className="col-span-2 text-right">Action</div>
        </div>
        
        {/* Rows */}
        <div className="p-2">
            {tokens.length === 0 ? (
                <div className="text-center py-8 text-[#A3A3A3]">No tokens found</div>
            ) : (
                tokens.map((t) => (
                    <TokenRow 
                        key={t.token.address} 
                        token={t} 
                        onOpenWithdraw={onOpenWithdraw}
                        isUSDC={t.token.symbol === "USDC"}
                    />
                ))
            )}
        </div>
    </div>
  );
};
