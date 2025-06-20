import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "rules": {
  "react/no-unescaped-entities": "off",
  "@typescript-eslint/no-unused-vars": "warn",
  "react-hooks/exhaustive-deps": "warn"
}

  /* config options here */
};

export default nextConfig;
