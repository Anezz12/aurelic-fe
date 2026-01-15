// ABI for MoeRouter (moe-core DEX)
// Updated: 2026-01-15
// Source: moe-core/src/dex/MoeRouter.sol

export const MOE_ROUTER_ABI = [
  {
    type: "function",
    name: "factory",
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
    name: "wNative",
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
    name: "addLiquidity",
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
      },
      {
        name: "amountADesired",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountBDesired",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountAMin",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountBMin",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amountA",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountB",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "liquidity",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "addLiquidityNative",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      },
      {
        name: "amountTokenDesired",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountTokenMin",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountNativeMin",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amountToken",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountNative",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "liquidity",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "removeLiquidity",
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
      },
      {
        name: "liquidity",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountAMin",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountBMin",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amountA",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountB",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "swapExactTokensForTokens",
    inputs: [
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountOutMin",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "path",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "swapTokensForExactTokens",
    inputs: [
      {
        name: "amountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountInMax",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "path",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "swapExactNativeForTokens",
    inputs: [
      {
        name: "amountOutMin",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "path",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "swapExactTokensForNative",
    inputs: [
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amountOutMin",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "path",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getAmountsOut",
    inputs: [
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "path",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getAmountsIn",
    inputs: [
      {
        name: "amountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "path",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "quote",
    inputs: [
      {
        name: "amountA",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "reserveA",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "reserveB",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amountB",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "getAmountOut",
    inputs: [
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "reserveIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "reserveOut",
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
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "getAmountIn",
    inputs: [
      {
        name: "amountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "reserveIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "reserveOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  }
] as const;

// Mantle Sepolia address
export const MOE_ROUTER_ADDRESS = "0x4806caFACE1C59F598AE3aBb8EAf57aF202D112E";
