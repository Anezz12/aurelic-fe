# Trading Component

This directory contains the trading functionality for the Aurelic DeFi protocol, implementing integration with Merchant Moe DEX for leveraged trading through restricted wallets.

## Overview

The trading system allows users to:

- Create leveraged positions (up to 5x) using USDC as collateral
- Trade various tokens including MNT (Mantle), ETH, and BTC
- Execute swaps through their restricted wallets with enhanced security
- Monitor positions and manage slippage tolerance

## Files Structure

```
trading/
├── TradingPage.tsx      # Main trading interface component
├── TradingHeader.tsx    # Trading page header
├── SwapCard.tsx         # Swap interface component
├── SwapInput.tsx        # Token input component
├── SwapSummary.tsx      # Swap summary display
└── README.md            # This file
```

## Components

### TradingPage

The main trading interface that provides:

- Token selection interface with MNT support
- Trade amount input with real-time validation
- Slippage tolerance configuration
- Loan creation and swap execution
- Real-time balance and position monitoring

### useTradingHooks (in hooks/contracts)

Custom hook that manages:

- Wallet connection state
- Contract interactions (loan creation, token swaps)
- Transaction status tracking
- Balance queries for both user wallet and restricted wallet

## Key Features

### Supported Tokens

- **ETH**: Mock Ethereum (18 decimals)
- **USDC**: Mock USD Coin - Primary collateral (6 decimals)
- **BTC**: Mock Bitcoin (8 decimals)
- **WMNT**: Wrapped Mantle (18 decimals) - Native token

### Trading Flow

1. **Connect Wallet**: User connects their wallet to the dApp
2. **Approve USDC**: Approve USDC spending for margin requirements (20% of position size)
3. **Create Loan**: Create a leveraged loan through LoanManager contract
4. **Execute Swap**: Use restricted wallet to swap tokens via Merchant Moe DEX
5. **Monitor Position**: Track gains/losses and manage position

### Security Features

- **Restricted Wallet**: All trades executed through secure restricted wallet
- **Whitelisted Tokens**: Only pre-approved tokens can be traded
- **Merchant Moe Integration**: Trades routed through secure DEX router
- **Slippage Protection**: Configurable slippage tolerance (0.1% to 50%)

## Configuration

### Token Addresses (Mantle Sepolia)

- USDC: `0xF4b37611C4B30a85063EF625356B588F597D41c5`
- ETH (Mock): `0xfc342707D95764Cfd754817Bac7bECe528E3f9b0`
- BTC (Mock): `0x6Cb880Ea81691ceF514FE150D1AC5d741Bb8d45d`
- WMNT: `0xDD1c4A80196C4375B6669D2c50d187b008ba77D4`

### Merchant Moe DEX Integration

- MoeRouter: `0x4806caFACE1C59F598AE3aBb8EAf57aF202D112E`
- MoeFactory: `0x09B9af72Adf53C7C01a5355C401702F66Fa498D8`
- Default Deadline: 20 minutes

## Usage Example

```tsx
import { TradingPage } from "@/components/trading";

export function App() {
  return (
    <div>
      <TradingPage />
    </div>
  );
}
```

## Smart Contract Integration

### RestrictedWallet Functions Used

- `swapExactInputSingle`: Swap exact input amount for minimum output
- `getQuote`: Get swap quote for token pair
- `getBalance`: Get token balance in restricted wallet
- `withdraw`: Withdraw tokens from restricted wallet

### LoanManager Functions Used

- `createLoan`: Create leveraged position
- `getLoanInfo`: Get user's current loan details
- `canCreateLoan`: Check if user can create new loan
- `repayLoan`: Repay and close loan position

## Error Handling

The component handles various error states:

- Wallet not connected
- Wrong network (must be Mantle Sepolia)
- Insufficient USDC balance
- Active loan already exists
- Transaction failures
- Pool does not exist errors

## Future Enhancements

1. **Price Oracles**: Integrate Chainlink price feeds for accurate pricing
2. **Advanced Orders**: Add limit orders and stop-loss functionality
3. **Multi-Hop Swaps**: Support complex trading routes
4. **Position Analytics**: Add PnL tracking and performance metrics
5. **Auto-Slippage**: Dynamic slippage based on market conditions

## Development Notes

This is a PoC (Proof of Concept) implementation focused on demonstrating the core functionality. For production use, consider:

- Real token address deployments on Mantle Mainnet
- Enhanced error handling and user feedback
- Gas optimization
- Comprehensive testing
- Security audits
