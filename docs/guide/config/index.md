# `config.yml`

本文档将逐步介绍 **`config.yml`** 文件中的各项配置，帮助你快速设置和定制 SuzuBlog。

## 📝 站点设置 (Site Settings)

```yaml
title: 'Suzu'
subTitle: 'Next.js Blog Template'
description: 'Suzu is a minimalist blog template with a serene sakura-inspired theme, blending modern design with a touch of traditional Japanese aesthetics.'
keywords: 'Suzu, Next.js, markdown blog, Tailwind CSS, blog template, sakura, ZL Asica'
author:
  name: 'ZL Asica'
  link: 'https://www.zla.pub'
lang: 'zh'
siteUrl: 'https://www.zla.pub'
```

- **`title`**: 站点名称，显示在标题和 `meta` 标签中。
- **`subTitle`**: 站点的副标题，通常用于补充描述。
- **`description`**: 网站的描述信息，出现在搜索引擎的摘要中。
- **`keywords`**: 用逗号分隔的关键字，用于 SEO 优化。
- **`author`**: 包括作者的名字和个人链接。
- **`lang`**: 语言代码（例如 `zh` 表示中文，`en` 表示英文）。
- **`siteUrl`**: 网站的公共根 URL，用于生成 SEO 标签（请勿包含末尾的斜杠）。

## 🖼️ 图像和视觉元素

```yaml
avatar: '/images/avatar.jpg'
background: '/images/background.jpg'
slogan: "As long as the code or the developer is able to run, it's all good."
googleAnalytics: G-659VZ9NH28
```

- **`avatar`**: 头像图片路径，可以是相对路径或完整 URL。
- **`background`**: 默认的背景图片路径，用于文章没有单独缩略图时显示。
- **`slogan`**: 显示在首页的标语。
- **`googleAnalytics`**: Google Analytics 跟踪 ID（可选，用于流量统计）。

## ✍️ 文章设置 (Posts Settings)

```yaml
creativeCommons:
  type: CC BY-SA 4.0 Deed
  link: https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans
```

- **`creativeCommons`**: 配置文章默认的版权许可，例如 `CC BY-SA 4.0`，链接到相应的许可证页面。

## 🐦 社交媒体设置 (Social Media Settings)

```yaml
socialMedia:
  github_username: ZL-Asica
  linkedin_username: elara-liu
  instagram_id: zl_asica
  ...
  email: zl@zla.app
  rss: true
```

- 为你的社交媒体账号添加链接。
- 留空某些字段可以隐藏对应的社交图标。
- 支持的平台包括 GitHub、LinkedIn、Instagram、Telegram、Zhihu 等。

## 📄 页面设置 (Pages Settings)

```yaml
thumbnailAbout: false
thumbnailFriends: false
```

- **`thumbnailAbout`** 和 **`thumbnailFriends`**: 是否为“关于”页面或“友情链接”页面显示缩略图。

## 💬 评论设置 (Comments Settings)

```yaml
twikooEnvId: https://xxx.vercel.app
disqusShortname: 'zla-pub'
```

- **`twikooEnvId`**: Twikoo 评论系统的云函数部署地址，具体请参考 [Twikoo 文档](https://twikoo.js.org/)。
- **`disqusShortname`**: 用于集成 Disqus 评论系统的短名称（可从 Disqus 账户中获取）。

## 🔧 自定义代码 (Custom Code Blocks)

```yaml
headerJavascript:
  - '/scripts/custom.js'
slotFooter: |
  <!-- Add your custom footer HTML here -->
```

- **`headerJavascript`**: 在 `<head>` 中插入的自定义 JavaScript 文件。
- **`slotFooter`**: 在 `<footer>` 中插入的自定义 HTML 代码。

## 🗓️ 页脚设置 (Footer Settings)

```yaml
startYear: 2017
```

- **`startYear`**: 你的博客开始年份（可选）。如果不设置，将只显示当前年份。

如果你对某些字段不确定其用途，建议参考默认模板的内容！✨
