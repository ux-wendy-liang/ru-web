# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是 Wendy Liang 的作品集网站迁移项目 - 将 Webflow 网站转换为自定义的 React/TypeScript 应用。用户是一位拥有 8 年以上经验的产品设计师，不是开发者。所有技术实现应由 Claude 完成，并用非技术语言解释。

**当前项目**: `portfolio/` - 使用 React + TypeScript + Vite + Tailwind CSS 构建的作品集网站

## 文件夹说明

- `portfolio/` - 主项目代码（**已关联 GitHub，所有网站改动必须在此文件夹内进行**）
- `research/` - 调研和分析文档（Case Study 写作指南、竞品分析等，仅本地保存）

**重要**: 只有 `portfolio/` 文件夹会被推送到 GitHub 并自动部署到 Vercel。其他文件夹的内容不会上线。

## 重要规则

**语言要求**: portfolio 网站中所有面向用户的内容（标题、描述、按钮文字等）必须使用**英文**。这是一个面向国际招聘者的作品集网站。

**用户须知**: 用户不会运行终端命令。始终主动帮用户运行命令，而不是给出指令让用户自己执行。

**质量要求**: 我不会写代码，所以每次修改完了之后一定要自己访问一下，不出错误再结束，如果有错误，一直修复到没有错误为止。

**测试工具**: 已安装 Chrome MCP，可以使用 `mcp__chrome-devtools__` 系列工具自动打开浏览器、截图、检查页面元素等，实现自动化测试。

**UI 完成提示**: 每次完成 UI 修改后，必须给用户提供可访问的 URL（本地开发服务器地址如 `http://localhost:5173` 或线上地址 `https://ruliang.vercel.app`），让用户可以自己查看和测试。

## 开发命令

所有命令需在 `portfolio/` 目录下运行：

```bash
# 启动开发服务器（修改后自动刷新）
npm run dev

# 生产环境构建
npm run build

# 预览生产构建
npm run preview

# 运行代码检查
npm run lint
```

## 架构

### 技术栈
- **React 19** + **TypeScript**
- **Vite 7** 开发工具
- **Tailwind CSS v3** 样式系统
- **React Router v7** 路由

### 项目结构

```
portfolio/
├── src/
│   ├── components/       # 可复用 UI 组件
│   │   ├── Navigation.tsx      # 导航栏
│   │   └── ProjectCard.tsx     # 项目卡片
│   ├── pages/                  # 页面组件
│   │   ├── Home.tsx            # 首页
│   │   ├── About.tsx           # 关于页
│   │   └── ProjectDetail.tsx   # 项目详情页
│   ├── data/
│   │   └── projects.ts         # 所有项目数据（唯一数据源）
│   └── App.tsx                 # 根组件和路由配置
├── public/
│   └── images/                 # 图片资源
└── [配置文件]
```

### 路由结构

- `/` - 首页（hero + 项目列表）
- `/about` - 关于页
- `/project/:id` - 项目详情页（id 对应 projects.ts 中的 project.id）

### 数据管理

**关键**: 所有项目内容集中在 `src/data/projects.ts`，这是**唯一数据源**：
- 项目元数据（标题、年份、角色、时长、团队）
- 项目内容（挑战、解决方案、影响）
- 图片路径

更新项目内容时，只需修改这个文件，页面会自动更新。

### 设计系统 (Design Guideline)

#### 字体
- **全站统一使用 Lato**（Google Fonts，字重 100/300/400/700/900）

#### 字号层级（从大到小）

| 层级 | Tailwind | 像素 | 用途 |
|------|---------|------|------|
| H1 | text-4xl md:text-5xl | 36→48px | 页面主标题（首页 hero、项目详情标题） |
| H2 | text-2xl md:text-3xl | 24→30px | 区块标题（Experience、The Problem、Results 等） |
| H3 | text-xl md:text-2xl | 20→24px | 子标题（公司名、Decision block 标题） |
| H4 | text-base md:text-lg | 16→18px | 小标题（职位名、卡片标题） |
| Body | text-lg | 18px | 正文 |
| Small | text-sm | 14px | 辅助文字、按钮文字 |
| Tiny | text-xs | 12px | 小标签（uppercase） |

#### 颜色系统

**文字颜色（4 级）：**
- `text-gray-900` — 标题、加粗文字
- `text-gray-600` — 正文、描述
- `text-gray-400` — 年份、标签、辅助文字
- `text-accent-teal` (#5B9B8E) — CTA 文字、品牌标签、数据亮点

**背景颜色（按内容性质搭配）：**
- `white` — 全站默认页面背景、图片多的区域
- `#F6FAF9` (浅青) — 品牌/成果区域（Impact section）
- `#F8F9FA` (浅灰) — 分析思考区（Design Decisions、Experience）
- `#FAF9F7` (浅暖) — 人文温度区（Testimonial、What I Learned）
- `animated-gradient` — 仅首页 hero 区域

**按钮样式（2 种，统一 2px outline）：**
- 主要 CTA：`border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white rounded-full`（VIEW MORE、SEE FULL CV、DOWNLOAD RESUME）
- 次要：`border-2 border-gray-400 text-gray-600 hover:text-gray-900 hover:border-gray-900 rounded-full`（email、résumé）

**Case Study 语义色块（以品牌青色为核心，统一柔和低饱和度）：**
- Challenge: bg-[#FBF3F2] / border-[#C2807A] / text-[#8B554E] (柔珊瑚)
- Insight: bg-[#F2F5F8] / border-[#7E97AD] / text-[#4E6577] (柔蓝灰)
- Solution: bg-[#F0F6F5] / border-[#5B9B8E] / text-[#3E6B61] (品牌青)
- Quote: bg-[#F7F5F2] / border-[#B09A82] / text-[#6B5C48] (暖沙色)

**Case Study Section 背景规则：**
- Hero / The Problem / Solution：白色（图片多，保持清晰）
- Key Design Decisions：浅灰 #F8F9FA
- Impact：浅青 #F6FAF9
- Testimonial / What I Learned：浅暖 #FAF9F7

**Tailwind 自定义颜色 (`tailwind.config.js`)：**
- Primary: `#F2FCE2` (`bg-primary`) — 用于小元素如序号圆点
- Accent teal: `#5B9B8E` (`text-accent-teal`, `border-accent-teal`) — 品牌强调色

#### 间距规范

**水平 padding（全站统一）：** `px-6 md:px-16 lg:px-24`（手机 24px → 平板 64px → 大屏 96px）

**最大宽度（2 档）：**
- `max-w-7xl` (1280px) — 宽布局（导航、项目列表、About 图文并排、Experience）
- `max-w-5xl` (1024px) — 阅读型内容（首页 hero 文字、Case Study 详情）

**垂直区块间距：** `py-20`（80px）用于大多数 section

### 图片处理

图片存放在 `public/images/`，使用绝对路径引用（如 `/images/xxx.png`）。

## 常用操作

### 添加新项目

1. 在 `src/data/projects.ts` 添加项目对象（遵循 `Project` 接口）
2. 图片放入 `public/images/`
3. 无需其他代码改动，页面自动渲染

### 组件规范

- 页面组件在 `pages/` 目录
- 使用 TypeScript 接口定义 props
- 使用 Tailwind 类名写样式
- 响应式设计使用 Tailwind 前缀（md:, lg:）

## 部署

- **线上网站**: https://ruliang.vercel.app
- **GitHub 仓库**: https://github.com/ux-wendy-liang/wendy-portfolio
- **平台**: Vercel（免费 Hobby 方案）
- **自动部署**: 已启用 - 推送到 `main` 分支自动部署

部署步骤：
1. 在 `portfolio/` 目录修改代码
2. 提交并推送到 GitHub（`git add . && git commit -m "message" && git push`）
3. Vercel 自动构建部署（约 15 秒）

## 与用户沟通

- 用户是产品设计师，不是开发者
- 用设计类比解释技术概念（如"组件就像 Figma 的组件"）
- 主动帮用户运行命令，不要给指令让用户自己执行
- 关注视觉效果和用户可见的变化
- 修改后说明网站上会看到什么变化
