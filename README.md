# 狗狗品種瀏覽器

歡迎使用狗狗品種瀏覽器！這是一個使用 Next.js 構建的網頁應用程式，允許用戶瀏覽各種狗狗品種，查看它們的圖片，並了解更多相關資訊。

## 功能特點

- **瀏覽品種**：查看全面的狗狗品種列表。
- **搜尋功能**：輕鬆搜尋特定的狗狗品種。
- **圖片畫廊**：查看每個選定品種的圖片畫廊。
- **輪播模態框**：通過互動式輪播格式查看放大的圖片，並帶有導航控制（下一張/上一張）。
- **響應式設計**：為各種裝置（桌面，平板，手機）提供無縫體驗。
- **效能優化**：利用 Next.js 的功能，如 App Router、`next/image` 圖片優化

## 技術

- **框架**：[Next.js](https://nextjs.org/)（使用 App Router）
- **語言**：[TypeScript](https://www.typescriptlang.org/)
- **UI 庫**：[React](https://reactjs.org/)
- **樣式**：[SCSS Modules](https://sass-lang.com/)
- **圖片優化**：`next/image`

## 專案結構

專案中的主要目錄和檔案：

```
/src
├── app
│   ├── dog
│   │   ├── [breed]                   # 個別品種頁面的動態路由
│   │   │   └── page.tsx
│   │   └── page.tsx                  # 列出所有品種的主頁
│   └── layout.tsx                    # 主應用布局
│   └── global.css                    # 全局樣式（如果有的話，雖然 globals.scss 是主要的）
├── apis                              # API 工具函數
│   ├── getBreedImages.ts
│   ├── getBreedNamesWithImageApi.ts
│   └── getDogRandomApi.ts
├── components                        # 可重用的 React 組件
│   ├── BreadNameDetail.tsx
│   ├── BreedDetail.tsx
│   ├── CarouselModal.tsx
│   └── SearchInput.tsx
├── styles                            # SCSS 模組檔案
│   ├── Breed.module.scss
│   ├── Home.module.scss
│   ├── Modal.module.scss
│   └── globals.scss                  # 全局 SCSS 樣式
├── public                            # 靜態資源（例如圖片、圖標）
next.config.mjs                       # Next.js 配置
package.json                          # 專案依賴和腳本
README.md                             # 本檔案
tsconfig.json                         # TypeScript 配置
```

## 開始使用
### 前提條件

- [Node.js](https://nodejs.org/)（推薦 v18.x 或更高版本）
- [npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/)

### 安裝

1.  克隆倉庫：
    ```bash
    git clone <你的倉庫URL>
    ```
2.  導航到專案目錄：
    ```bash
    cd dog-breed-viewer
    ```
3.  安裝依賴：
    ```bash
    npm install
    # 或
    yarn install
    ```

### 運行開發伺服器

要啟動開發伺服器：

```bash
npm run dev
# 或
yarn dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看應用程式。

## 使用的 API

本專案使用 [Dog CEO API](https://dog.ceo/dog-api/) 獲取狗狗品種列表及其相應的圖片。

## Wireframe

本專案使用 [Wireframe](https://www.figma.com/file/QugZpncdi1H3y9XDVv7fHF/Dog-images-carousel)

## 未來增強和優化

- 探索進一步使用 Next.js 伺服器組件進行數據獲取。
- seo 分數優化(CLS、LCP、INP)。
- 加入單元測試。
- 通過更多互動元素或動畫增強 UI/UX。
