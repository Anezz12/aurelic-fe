import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { defineChain } from "viem";
import { createStorage } from "wagmi";

// Validate environment variables
const projectId = process.env.WALLET_CONNECT_PROJECT_ID;
if (!projectId) {
  console.warn("WALLET_CONNECT_PROJECT_ID not found");
}

// Define Mantle Sepolia - our primary testnet chain
export const mantleSepolia = defineChain({
  id: 5003,
  name: "Mantle Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Mantle Sepolia Explorer",
      url: "https://sepolia.mantlescan.xyz",
    },
  },
  testnet: true,
});

// Define Mantle Mainnet - for future production deployment
export const mantleMainnet = defineChain({
  id: 5000,
  name: "Mantle",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Mantle Explorer",
      url: "https://mantlescan.xyz",
    },
  },
  testnet: false,
});

export const config = getDefaultConfig({
  appName: "Aurelic",
  projectId: projectId || "aurelic-demo",
  chains: [mantleSepolia],
  ssr: false,
  storage: createStorage({
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  }),
  // Add connection timeout and retry settings
  batch: {
    multicall: {
      batchSize: 1024,
      wait: 16,
    },
  },
});
