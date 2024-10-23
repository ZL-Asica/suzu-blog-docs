# 🚀 Quick Start

Welcome to **SuzuBlog**! Follow these steps to quickly set up your blog:

## 1. Use the Template

Click the **`Use this template`** button to create your own blog repository.

## 2. Configure Site Information

Locate the `config.yml` file in the root directory of your project and modify it as follows:

- Set your **site title**, **description**, and **author information**.
- Configure your social links and other customization options.

## 3. Write Articles

- Place Markdown files in the `posts` folder. The filename will automatically become the URL of the article.
- To customize pages like "About Me" or "Friends," edit the corresponding files in the `posts/_pages` directory.

## 4. Deploy

### Recommended: Cloud Hosting

Use [Vercel](https://vercel.com) for deployment:

1. Import your GitHub project to Vercel.
2. Follow the prompts to complete the setup. Vercel will automatically build and host your blog.

### Local Deployment/Preview

1. Ensure you have installed [Node.js](https://nodejs.org/).
2. Run the following commands in the root directory of your project:

   ```bash
   pnpm install
   pnpm dev
   ```

3. Open your browser and visit `http://localhost:3000` to preview your blog.

## 5. Automatic Updates

Your blog is set up to automatically sync with the latest updates from the SuzuBlog template through **GitHub Actions**.

The following directories are excluded during synchronization to ensure your custom content remains untouched:

- `.git`
- `public`
- `posts`
- `config.yml`

If you encounter any issues, don't forget to check our detailed documentation or join the community for support! ✨
