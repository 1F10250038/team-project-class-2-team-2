# 季節音楽紹介サイト - Team 2

4人のメンバーがそれぞれの季節を担当して、お気に入りの音楽を紹介するWebサイトです。

## プロジェクト概要

このプロジェクトは、季節ごとに異なる音楽の魅力を紹介するWebアプリケーションです。各メンバーが担当する季節は以下の通りです：

- **春 (Spring)** - Min：桜舞い踊る季節の心温まる楽曲
- **夏 (Summer)** - Daisuke：太陽と海の季節のエネルギッシュな楽曲
- **秋 (Autumn)** - Koki：紅葉の季節の美しいメロディー
- **冬 (Winter)** - Ritsu：雪降る季節の心温まる楽曲

## 技術スタック

- **フレームワーク**: Next.js 15.3.5
- **言語**: TypeScript
- **スタイリング**: TailwindCSS v4
- **UIコンポーネント**: ShadcnUI
- **アニメーション**: Framer Motion
- **テーマ**: next-themes（ダークモード対応）

## 開発環境のセットアップ

### 必要な環境

- **Node.js 18.0.0以上**: [https://nodejs.org/](https://nodejs.org/)
- **npm、yarn、pnpm、またはbunのいずれか**:
  - npm: Node.jsに同梱されています
  - yarn: [https://yarnpkg.com/](https://yarnpkg.com/)
  - pnpm: [https://pnpm.io/](https://pnpm.io/)
  - bun: [https://bun.sh/](https://bun.sh/)

### インストール手順

1. リポジトリをクローンします：

```bash
git clone <repository-url>
cd team-project-class-2-team-2/csex-team2
```

2. 依存関係をインストールします：

```bash
npm install
# または
yarn install
# または
pnpm install
# または
bun install
```

3. 開発サーバーを起動します：

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認します。

### 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - 本番用ビルドを作成
- `npm run start` - 本番用サーバーを起動
- `npm run lint` - ESLintでコードをチェック

## プロジェクト構造

```
csex-team2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # メインページ
│   │   ├── daisuke/           # 夏の音楽ページ
│   │   ├── min/               # 春の音楽ページ
│   │   ├── koki/              # 秋の音楽ページ
│   │   ├── ritsu/             # 冬の音楽ページ
│   │   └── layout.tsx         # レイアウトコンポーネント
│   ├── components/            # 再利用可能なコンポーネント
│   │   ├── ui/                # ShadcnUIコンポーネント
│   │   ├── MemberCard.tsx     # メンバーカードコンポーネント
│   │   ├── SeasonSection.tsx  # 季節セクションコンポーネント
│   │   ├── ThemeProvider.tsx  # テーマプロバイダー
│   │   ├── ThemeToggle.tsx    # ダークモード切り替え
│   │   └── NavigationMenu.tsx # ナビゲーションメニュー
│   ├── data/                  # データ定義
│   │   └── constants.ts       # 定数・データ
│   └── types/                 # 型定義
│       └── index.ts           # TypeScript型定義
├── public/                    # 静的ファイル
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.ts
```

## 機能

### 🎵 メイン機能

- **季節別音楽紹介**: 4つの季節ごとに厳選された楽曲を紹介
- **レスポンシブデザイン**: モバイルからデスクトップまで対応
- **ダークモード**: ライト・ダークテーマの切り替え可能
- **アニメーション**: Framer Motionによる滑らかなアニメーション

### 🎨 デザイン特徴

- **グラスモーフィズム**: 美しい半透明のガラス効果
- **季節テーマ**: 各季節に合わせた色彩とアニメーション
- **インタラクティブ要素**: ホバーエフェクトとマイクロインタラクション

### 🎬 各ページの特徴

#### 春ページ (Min)

- 桜の花びらが舞い踊るアニメーション
- ピンク・ローズ系の温かい色調
- 「ここすきポイント」セクション

#### 夏ページ (Daisuke)

- 波のアニメーションと夏の絵文字
- オレンジ・黄色・青の爽やかな色調
- 太陽の回転アニメーション

#### 秋ページ (Koki)

- 紅葉が舞い散るアニメーション
- オレンジ・赤・茶色の温かい色調
- 秋の音楽の魅力紹介セクション

#### 冬ページ (Ritsu)

- 雪の結晶が舞うアニメーション
- 青・シアン系の静寂な色調
- インタラクティブなナビゲーション

## 開発について

このプロジェクトは、モダンなWeb開発技術を使用して構築されています。コンポーネントベースの設計により、再利用性と保守性を重視しています。

ページの編集は `src/app/` ディレクトリ内の各ファイルを変更することで行えます。ファイルを編集すると、開発サーバーが自動的に変更を反映します。

## デプロイ

このNext.jsアプリケーションをデプロイする最も簡単な方法は、Next.jsの開発元であるVercelプラットフォームを使用することです。

詳細については、[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)をご確認ください。

## チームメンバー

- **Min** - 春の音楽担当
- **Daisuke** - 夏の音楽担当
- **Koki** - 秋の音楽担当
- **Ritsu** - 冬の音楽担当

---

_音楽と共に、四季の美しさをお楽しみください_ 🎵
