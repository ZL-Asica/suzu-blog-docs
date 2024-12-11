# 📝 Posts

You can write your posts using Markdown and place them directly in the **`posts` folder**. SuzuBlog will automatically render your posts, and the filename will serve as the URL for the article.

Each article should include a **Frontmatter**, which is used to define basic information and control its display behavior.

## 🔖 What is Frontmatter?

Frontmatter is a block of metadata located at the top of a Markdown file, enclosed by three dashes. For example:

```yaml
---
title: 'Sample Article'
date: '2024-12-08'
author: 'ZL Asica'
thumbnail: '/images/example-thumbnail.jpg'
tags:
  - SuzuBlog
  - Frontmatter
categories:
  - Tutorial
redirect: '/example-redirect'
showComments: true
showLicense: true
autoSlug: true
---
```

## 🛠️ Frontmatter Field Explanations

### **Required Fields**

- **`title`**: The title of the article, displayed in the page title and summary.
- **`date`**: The publication date of the article, formatted as `YYYY-MM-DD`. (If not provided, the file's last modified date will be used.)
- **`author`**: The name of the author, used to attribute the article. (If not provided, the global author name will be used.)
- **`thumbnail`**: The path to the article's thumbnail image, which can be a relative path or a full URL. (If not provided, the default thumbnail set in `config.yml` will be used.)

### **Optional Fields**

- **`tags`**: An array of tags for the article, used for categorizing content (e.g., `["Tag1", "Tag2"]`).
- **`categories`**: An array of categories for higher-level content organization (e.g., `["Category1", "Category2"]`).
- **`redirect`**: Specifies a redirection URL for the article (e.g., `"/new-url"`). If set, the article will not display its content but will redirect to the specified URL.
- **`showComments`**: Whether to enable the comment section for the article. Defaults to `true`.
- **`showLicense`**: Whether to display the article's license information. Defaults to `true`.
- **`showThumbnail`**: Whether to display the article's thumbnail. Defaults to `true`.
- **`autoSlug`**: Whether to automatically generate hierarchical paths for the article. Defaults to `true`. (If set to `false`, the title inside the Markdown file will not be used for generating slugs.)

## ✂️ Article Summary Truncation

You can manually truncate the article summary using `<!--more-->`, like this:

```markdown
This is the opening part of the article.

`<!--more-->`

This is the remaining content of the article.
```

- If `<!--more-->` is not specified, the system will automatically truncate the content to fit within the article card's display area.
