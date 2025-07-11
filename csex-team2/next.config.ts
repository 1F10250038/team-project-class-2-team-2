import type { NextConfig } from "next";

// あなたのリポジトリ名をここに設定します
const repo = "team-project-class-2-team-2";

const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  // 静的サイトとして出力する設定
  output: "export",

  // GitHub Pagesで正しくパスを解決するための設定
  assetPrefix: assetPrefix,
  basePath: basePath,

  // Next.jsの画像最適化を無効にする（静的エクスポートで必要）
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
