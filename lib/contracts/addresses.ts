// Contract configuration for Aurelic Protocol
// Updated: January 15, 2026
// Network: Mantle Sepolia (5003)

export const NETWORK_CONFIG = {
  chainId: 5003,
  name: "Mantle Sepolia",
  rpcUrl: "https://rpc.sepolia.mantle.xyz",
  explorerUrl: "https://sepolia.mantlescan.xyz",
  blockExplorerUrl: "https://sepolia.mantlescan.xyz",
} as const;

// Supported chains configuration
export const SUPPORTED_CHAINS = {
  MANTLE_SEPOLIA: 5003,
  MANTLE_MAINNET: 5000,
} as const;

// Current active chain
export const ACTIVE_CHAIN_ID = SUPPORTED_CHAINS.MANTLE_SEPOLIA;

// Import ABI files and their addresses
import {
  MOCK_USDC_ABI,
  MOCK_USDC_ADDRESS,
} from "@/lib/contracts/abis/mock-usdc-abi";
import {
  MOCK_ETH_ABI,
  MOCK_ETH_ADDRESS,
} from "@/lib/contracts/abis/mock-eth-abi";
import {
  MOCK_BTC_ABI,
  MOCK_BTC_ADDRESS,
} from "@/lib/contracts/abis/mock-btc-abi";
import {
  LENDING_POOL_ABI,
  LENDING_POOL_ADDRESS,
} from "@/lib/contracts/abis/lending-pool-abi";
import {
  COLLATERAL_MANAGER_ABI,
  COLLATERAL_MANAGER_ADDRESS,
} from "@/lib/contracts/abis/collateral-manager-abi";
import {
  LOAN_MANAGER_ABI,
  LOAN_MANAGER_ADDRESS,
} from "@/lib/contracts/abis/loan-manager-abi";
import {
  RESTRICTED_WALLET_FACTORY_ABI,
  RESTRICTED_WALLET_FACTORY_ADDRESS,
} from "@/lib/contracts/abis/restricted-wallet-factory-abi";

// Contract configurations for wagmi - using addresses from ABI files
export const CONTRACT_CONFIGS = {
  MOCK_USDC: {
    address: MOCK_USDC_ADDRESS as `0x${string}`,
    abi: MOCK_USDC_ABI,
  },
  MOCK_ETH: {
    address: MOCK_ETH_ADDRESS as `0x${string}`,
    abi: MOCK_ETH_ABI,
  },
  MOCK_BTC: {
    address: MOCK_BTC_ADDRESS as `0x${string}`,
    abi: MOCK_BTC_ABI,
  },
  LENDING_POOL: {
    address: LENDING_POOL_ADDRESS as `0x${string}`,
    abi: LENDING_POOL_ABI,
  },
  COLLATERAL_MANAGER: {
    address: COLLATERAL_MANAGER_ADDRESS as `0x${string}`,
    abi: COLLATERAL_MANAGER_ABI,
  },
  RESTRICTED_WALLET_FACTORY: {
    address: RESTRICTED_WALLET_FACTORY_ADDRESS as `0x${string}`,
    abi: RESTRICTED_WALLET_FACTORY_ABI,
  },
  LOAN_MANAGER: {
    address: LOAN_MANAGER_ADDRESS as `0x${string}`,
    abi: LOAN_MANAGER_ABI,
  },
} as const;

// DEX Addresses (moe-core)
export const DEX_ADDRESSES = {
  MOE_ROUTER: "0x4806caFACE1C59F598AE3aBb8EAf57aF202D112E" as const,
  MOE_FACTORY: "0x09B9af72Adf53C7C01a5355C401702F66Fa498D8" as const,
} as const;

// Wrapped native token
export const WMANTLE_ADDRESS = "0xDD1c4A80196C4375B6669D2c50d187b008ba77D4" as const;
