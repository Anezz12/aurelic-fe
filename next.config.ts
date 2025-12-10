import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  serverExternalPackages: [
    "@walletconnect/ethereum-provider",
    "@base-org/account",
    "@metamask/sdk",
    "@safe-global/safe-apps-provider",
    "pino",
    "thread-stream",
  ],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
