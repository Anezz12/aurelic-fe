// ABI for RestrictedWalletFactory - Mantle/moe-core version
// Updated: 2026-01-15
// Source: RestrictedWalletFactory.sol (moe-core integration)

export const RESTRICTED_WALLET_FACTORY_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_moeRouter",
        type: "address",
        internalType: "address"
      },
      {
        name: "_moeFactory",
        type: "address",
        internalType: "address"
      },
      {
        name: "_loanManager",
        type: "address",
        internalType: "address"
      },
      {
        name: "_whitelistedTokens",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "createWallet",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "wallet",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getAllWallets",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getOrCreateWallet",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "wallet",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getWallet",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getWalletCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getWhitelistedTokens",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "hasWallet",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "loanManager",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "moeFactory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "moeRouter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "userWallet",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "wallets",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "WalletCreated",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "wallet",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: []
  }
] as const;

// Mantle Sepolia address
export const RESTRICTED_WALLET_FACTORY_ADDRESS = "0x59669c14d30BeCcd2328215eBcAE770E0dDDF08D";
