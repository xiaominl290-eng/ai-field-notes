# 偏航记录

一个适合放在 GitHub 的个人 AI 观察站。它参考了日报型资讯站的内容节奏，但重新设计了信息结构和视觉语言：每条记录明确分成事实摘要、个人判断、仍待确认的信息和原始来源。

## 最快的改法

日常更新只需要编辑 [`app/content.ts`](app/content.ts)：

- `site`：站名、日期、期号和首页标题；
- `leadStories`：三条重点观察；
- `quickSignals`：底部短讯。

页面布局在 [`app/page.tsx`](app/page.tsx)，全部视觉样式在 [`app/globals.css`](app/globals.css)。

项目仓库：[xiaominl290-eng/ai-field-notes](https://github.com/xiaominl290-eng/ai-field-notes)。

## 本地运行

需要 Node.js 22.13 或更高版本，以及 pnpm。

```bash
pnpm install
pnpm dev
```

浏览器打开 `http://localhost:3000`。

正式构建：

```bash
pnpm build
```

## 放到 GitHub

在 GitHub 新建一个空仓库，不要额外生成 README。然后在本项目目录执行：

```bash
git add .
git commit -m "Create my AI field notes"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

GitHub 用来保存和协作代码；如果还需要一个公开访问的网址，可以把这个仓库连接到 Cloudflare。当前项目使用 vinext，适合部署到 Cloudflare Workers。

## 内容原则

- 不整段复制新闻，只写自己的摘要；
- 每条信息保留原始来源链接；
- 把事实、判断和不确定性分开；
- 图片、商标和长篇原文在使用前确认授权。

## 技术结构

- React 19
- vinext
- TypeScript
- Cloudflare Workers 兼容构建

页面无需数据库，适合作为第一版个人站。后续可以再加入多期归档、搜索、RSS 和自动采集。
