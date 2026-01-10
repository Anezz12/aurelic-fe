// Auto-generated ABI for RestrictedWallet
// Generated at: 2026-01-10T04:05:28.032Z
// Source: RestrictedWallet.sol/RestrictedWallet.json

export const RESTRICTED_WALLET_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_initialOwner",
        type: "address",
        internalType: "address"
      },
      {
        name: "_veloRouter",
        type: "address",
        internalType: "address"
      },
      {
        name: "_poolFactory",
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
    name: "MAX_DEADLINE_EXTENSION",
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
    name: "addWhitelistedToken",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getBalance",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getMaxWithdrawableUSDC",
    inputs: [],
    outputs: [
      {
        name: "maxWithdrawable",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getQuote",
    inputs: [
      {
        name: "tokenIn",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenOut",
        type: "address",
        internalType: "address"
      },
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amountOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isTokenWhitelisted",
    inputs: [
      {
        name: "token",
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
    name: "owner",
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
    name: "poolFactory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPoolFactory"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "removeWhitelistedToken",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "swapExactInputSingle",
    inputs: [
      {
        name: "tokenIn",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenOut",
        type: "address",
        internalType: "address"
      },
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountOutMinimum",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amountOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "usdcToken",
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
    name: "veloRouter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IRouter"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "whitelistedTokens",
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
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "SwapExecuted",
    inputs: [
      {
        name: "tokenIn",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "tokenOut",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amountIn",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "amountOut",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "TokensWithdrawn",
    inputs: [
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "error",
    name: "DeadlineTooLate",
    inputs: []
  },
  {
    type: "error",
    name: "InsufficientOutput",
    inputs: []
  },
  {
    type: "error",
    name: "InsufficientUSDCForLoan",
    inputs: []
  },
  {
    type: "error",
    name: "InvalidAddress",
    inputs: []
  },
  {
    type: "error",
    name: "InvalidAmount",
    inputs: []
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      }
    ]
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      }
    ]
  },
  {
    type: "error",
    name: "PoolDoesNotExist",
    inputs: []
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: []
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      }
    ]
  },
  {
    type: "error",
    name: "TokenNotWhitelisted",
    inputs: []
  },
  {
    type: "error",
    name: "TransactionExpired",
    inputs: []
  },
  {
    type: "error",
    name: "Unauthorized",
    inputs: []
  }
] as const;
