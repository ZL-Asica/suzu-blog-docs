# 📄 Special Configuration for `_pages` Folder

Files in the **`_pages` folder** (e.g., "About Me" and "Friends") require a specific configuration as shown below, instead of using the standard Frontmatter format for articles.

### Example:

```yaml
---
title: 'About Me'
thumbnail: ''
showComments: false
---
```

## 🛠️ Explanation of Frontmatter Fields

All fields are optional.

- **`title`**: The title of the page, displayed in the page header and navigation bar. You can set any text for this field.
- **`thumbnail`**: The path to the page's thumbnail image, which can be a relative path or a full URL. (If not provided, no thumbnail will be displayed.)
- **`showComments`**: Whether to enable the comment section for the page. Defaults to `true`. (Set to `false` to hide the comment section.)
