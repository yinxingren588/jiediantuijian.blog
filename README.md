# 2027节点推荐 (jiediantuijian.blog)

本项目是专为 **「2027节点推荐」** 核心 Bing 搜索关键词深度打造的现代化博客网站框架，基于 **Astro 5 + Tailwind CSS** 技术栈构建，具备极致的轻量速度、静态化生成能力与搜索引擎友好性。

- **正式上线域名**：`https://jiediantuijian.blog`
- **核心 Bing 搜索主词**：`2027节点推荐`
- **主要内容领域**：2027 优质梯子机场节点测速评测、IPLC/IEPL 全专线节点推荐、性价比节点指南、流媒体与 ChatGPT 原生解锁、Clash/小火箭/Sing-box 全平台配置教程。

---

## 一、站点框架与页面规划

1. **首页 (`/`)**：
   - 核心落地页，SEO 围绕 `2027节点推荐` 展开。
   - 涵盖 2027 精选节点排行（Top 1-6）、多维度横向参数比对、四大选购黄金法则、主流客户端入口及 Bing Schema FAQ 问答。
2. **2027节点推荐大全 (`/nodes`)**：
   - 支持按「全专线旗舰」、「IPLC专线」、「外贸与AI专属」、「高性价比平民款」、「不限时按量备用」、「游戏电竞加速」等标签即时切换筛选。
3. **独立节点深度评测 (`/nodes/[slug]`)**：
   - 包含极速云 (`/nodes/cyberspeed`)、星辰专线 (`/nodes/starlink`)、云鲸速连 (`/nodes/cloudwhale`)、极光加速 (`/nodes/aurora`)、随心用 (`/nodes/anyflow`)、游刃电竞 (`/nodes/gameblade`) 等专属评测页。
   - 内置 Schema Product & Review 评测结构化数据。
4. **六大节点多维横评 (`/comparison`)**：
   - 从线路类型、峰值速率、平均延迟、参考月付、流媒体解锁及人群推荐进行综合对比。
5. **客户端配置教程中心 (`/tutorials`)**：
   - 包含 Clash Verge Rev 电脑端指南 (`/tutorials/clash-guide`)、Shadowrocket 小火箭 iOS 配置 (`/tutorials/shadowrocket`)、Sing-box 极客指南 (`/tutorials/sing-box`)。
6. **常见问答 FAQ (`/faq`)**：
   - 针对 Bing 搜索热门疑问进行权威解答，全量注入 Schema.org FAQPage 结构化标记。
7. **关于与评测准则 (`/about`)**：
   - 说明独立客观晚高峰实测方法学，并包含合规免责声明。
8. **HTML 网站地图 (`/sitemap`)**：
   - 全站页面扁平化索引，利于 Bingbot 和 Googlebot 深度抓取。

---

## 二、Bing SEO 针对性优化特性

1. **标题与元标签**：
   - Title、H1 与 Description 均将核心词 `2027节点推荐` 前置，提升关键词相关性与点击飘红率。
2. **Schema.org 结构化数据 (JSON-LD)**：
   - 全站注入 `WebSite`（带 SearchAction）、`Organization`。
   - 首页与 FAQ 页注入 `FAQPage`，可在 Bing 搜索结果中直接展开折叠问答富摘要（Rich Snippets）。
   - 节点评测页注入 `Product` 与 `Review`（含 10 分制评分与评价人数）。
3. **微软 Bing IndexNow 实时索引支持**：
   - 根目录下已部署 IndexNow 验证 Key：`8f26a57c91e045bb8d15ea4172e29381.txt`。
4. **规范的 Robots & Sitemap**：
   - `public/robots.txt` 专门配置了针对 `Bingbot` 的抓取规则与 Sitemap 索引路径。
   - `@astrojs/sitemap` 自动生成标准的 `sitemap-index.xml` 和 `sitemap-0.xml`。
5. **规范化 URL (Canonical Tag)**：
   - 全站严格指向 `https://jiediantuijian.blog/...`，避免重复收录分流权重。

---

## 三、常用命令

```bash
# 安装依赖
npm install

# 启动本地开发服务 (支持热重载)
npm run dev

# 编译生成全站纯静态 HTML / CSS / XML（输出在 dist/ 目录）
npm run build

# 本地预览编译后的生产站点
npm run preview
```

---

## 四、部署上线说明

- **Cloudflare Pages / Vercel**：
  - 构建命令：`npm run build`
  - 输出目录：`dist`
  - 自定义域名绑定：直接在平台控制台绑定 `jiediantuijian.blog` 即可（`public/CNAME` 已就绪）。
- **Nginx / 静态主机**：
  - 将编译生成的 `dist/` 目录下全部文件上传至网站根目录即可直接运行。
