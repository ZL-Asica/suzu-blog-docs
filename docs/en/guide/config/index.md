# `config.yml`

This document provides a step-by-step explanation of the **`config.yml`** file to help you quickly set up and customize SuzuBlog.

## 📝 Site Settings

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

### Explanation

- **`title`**: The name of your blog, displayed in the title and `meta` tags.
- **`subTitle`**: The subtitle of your site, typically used as a brief description.
- **`description`**: A detailed description of your site, shown in search engine summaries.
- **`keywords`**: Comma-separated keywords for SEO purposes.
- **`author`**: Includes the author's name and personal link.
- **`lang`**: The language code (e.g., `zh` for Chinese, `en` for English).
- **`siteUrl`**: The public root URL of your site (do not include a trailing slash).

## 🖼️ Images and Visual Elements

```yaml
avatar: '/images/avatar.jpg'
background: '/images/background.jpg'
slogan: "As long as the code or the developer is able to run, it's all good."
googleAnalytics: G-659VZ9NH28
```

- **`avatar`**: Path to the avatar image. This can be a relative path or a full URL.
- **`background`**: The default background image used when posts lack individual thumbnails.
- **`slogan`**: A slogan displayed on your homepage.
- **`googleAnalytics`**: The Google Analytics tracking ID (optional, for traffic analytics).

## ✍️ Post Settings

```yaml
creativeCommons:
  type: CC BY-SA 4.0 Deed
  link: https://creativecommons.org/licenses/by-sa/4.0/deed.en
```

- **`creativeCommons`**: Configures the default license for posts, such as `CC BY-SA 4.0`. Links to the corresponding license page.

## 🐦 Social Media Settings

```yaml
socialMedia:
  github_username: ZL-Asica
  linkedin_username: elara-liu
  instagram_id: zl_asica
  ...
  email: zl@zla.app
  rss: true
```

- Add links to your social media accounts.
- Leave fields empty to hide specific icons.
- Supported platforms include GitHub, LinkedIn, Instagram, Telegram, Zhihu, and more.

## 📄 Page Settings

```yaml
thumbnailAbout: false
thumbnailFriends: false
```

- **`thumbnailAbout`** and **`thumbnailFriends`**: Whether to display thumbnails for the "About" or "Friends" pages.

## 💬 Comments Settings (Disqus)

```yaml
twikooEnvId: https://xxx.vercel.app
disqusShortname: 'zla-pub'
```

- **`twikooEnvId`**: The Twikoo backend deployment address. Refer to the [Twikoo documentation](https://twikoo.js.org/) for details.
- **`disqusShortname`**: The shortname used to integrate the Disqus comment system (can be found in your Disqus account).

## 🔧 Custom Code Blocks

```yaml
headerJavascript:
  - '/scripts/custom.js'
slotFooter: |
  <!-- Add your custom footer HTML here -->
```

- **`headerJavascript`**: Custom JavaScript files to be included in the `<head>` section.
- **`slotFooter`**: Custom HTML code to be included in the `<footer>` section.

## 🗓️ Footer Settings

```yaml
startYear: 2017
```

- **`startYear`**: The start year of your blog (optional). If not set, only the current year will be displayed.

If you're unsure about any fields, refer to the default template for guidance! ✨
