# 🔗 友情链接指南

友情链接是博客中常见的一种页面。在 SuzuBlog 中，我们采取特定的样式对友情链接进行渲染和展示，以便更好地管理和展示友链信息。

`/posts/_pages/Friends.md` 就是友情链接页面的文件，你可以在此文件中随意撰写任何 markdown 内容，但链接部分需要参考下面的配置方式以便正确渲染链接卡片样式。

## 📜 Frontmatter 配置

```yaml
---
title: Some Customized Title # （可选）页面标题，默认为 "Friends"
thumbnail: '' # （可选）页面缩略图
showComments: true # 是否启用评论功能
---
```

### 配置说明

- **`title`**：页面标题，默认为 `Friends`，如果需要个性化标题，可以在此设置。
- **`thumbnail`**：为友情链接页面添加一个自定义缩略图。（默认不显示缩略图）
- **`showComments`**：是否启用评论功能，设置为 `true` 或 `false`。

## 🖇️ 友情链接格式

每个友链都需要遵循以下特定的 JSON 格式，确保正确生成友链卡片：

### 示例结构

注意我们采取代码块的形式来进行检测和渲染，要在代码块开头使用 ````Links` 标记，然后在下面添加友链信息。可以参考我们自带的文件内的示例。

````markdown
```Links
[
  {
  "title": "个人学术网站",
  "link": "https://www.zla.app/",
  "img": "https://r2.img.zla.app/2024/12/02/ae779a.webp",
  "des": "我的个人学术网站(英文)。"
  },
  {
  "title": "React 工具库",
  "link": "https://react.zla.app/",
  "img": "https://react.zla.app/logo.png",
  "des": "我自己搭建和维护的 React 工具库。"
  }
]
```
````

### 配置说明

友链的 JSON 结构如下：

```json
{
  "title": "链接的名称",
  "link": "链接的地址",
  "img": "链接的图标或头像",
  "des": "链接的描述"
}
```

- **`title`**：链接的标题，例如个人博客或项目名称。
- **`link`**：链接的完整 URL。
- **`img`**：链接的头像 URL，支持任意大小、格式的图片。
- **`des`**：链接的简短描述，用于说明站点或项目的特点。

按照以上格式配置后，你的友情链接页面将正确生成，方便管理与展示。✨
