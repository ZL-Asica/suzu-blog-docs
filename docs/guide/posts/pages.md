# 📄 `_pages` 文件夹特殊配置

**`_pages` 文件夹**中的文件（如 "关于我" 和 "友情链接"）需要使用本页面的配置，而非使用常规文章的 Frontmatter。

示例：

```yaml
---
title: 'About Me'
thumbnail: ''
showComments: false
---
```

## 🛠️ Frontmatter 字段解释

所有字段均为选填字段。

- **`title`**: 页面标题，将显示在页面标题和导航栏中，可以设置任何文本。
- **`thumbnail`**: 页面的缩略图路径，可以是相对路径或完整 URL。（若未设置，将不会显示缩略图）
- **`showComments`**: 是否显示评论功能，默认为 `true`。（若设置为 `false`，将不会显示评论功能）
