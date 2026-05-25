# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 React 19 + Vite 构建的单页简历网站，采用 A4 纸张布局，支持打印输出。

## 常用命令

```bash
pnpm dev       # 启动开发服务器
pnpm build     # 生产环境构建
pnpm lint      # 运行 ESLint 检查
pnpm preview   # 预览生产构建
```

## 技术栈

- React 19 + Vite 7
- 纯 CSS（使用 CSS 变量进行主题管理）
- FontAwesome 6（通过 CDN 加载）
- pnpm 包管理器

## 架构

```
App
├── PrintButton    # 固定定位的打印按钮
├── Sidebar        # 左侧边栏：头像、联系方式、技能、荣誉
│   └── Notification  # 复制成功的 Toast 提示
└── MainContent    # 主内容区：关于、项目经历、工作经历
```

**状态管理：** 仅使用 React 本地状态（useState），无外部状态库
**路由：** 无路由，单页应用

## 样式规范

- 主题色定义在 `App.css` 的 CSS 变量中
- 布局采用 210mm × 297mm A4 尺寸
- 响应式断点：768px（移动端单列布局）
- 打印样式通过 `@media print` 实现，保留颜色

## 开发注意事项

- ESLint 配置要求严格，提交前运行 `pnpm lint`
- 保持组件职责分离，新功能优先扩展现有组件
- FontAwesome 图标使用 `fa-solid` 和 `fa-brands` 类名
- 修改样式后测试浏览器打印预览效果
