// ABI for MoeFactory (moe-core DEX)
// Updated: 2026-01-15
// Source: moe-core/src/dex/MoeFactory.sol

export const MOE_FACTORY_ABI = [
  {
    type: "event",
    name: "PairCreated",
    inputs: [
      {
        name: "token0",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "token1",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "pair",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "FeeToSet",
    inputs: [
      {
        name: "feeTo",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "function",
    name: "feeTo",
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
    name: "getPair",
    inputs: [
      {
        name: "tokenA",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenB",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "pair",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "allPairs",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "pair",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "allPairsLength",
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
    name: "moePairImplementation",
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
    name: "createPair",
    inputs: [
      {
        name: "tokenA",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenB",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "pair",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setFeeTo",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  }
] as const;

// Mantle Sepolia address
export const MOE_FACTORY_ADDRESS = "0x09B9af72Adf53C7C01a5355C401702F66Fa498D8";
