import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './dist',
  title: "65style's Blog",
  description: "65style's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/markdown-examples' },
      { text: 'Tags', link: '/tags' },
      { text: 'About', link: '/about' },
      { text: 'Radio', link: 'https://radio.65style.eu.org' },
      { text: 'OneDrive', link: 'https://oneindex.65style.eu.org' },
    ],

    sidebar: [
      {
        text: 'Markdown',
        items: [
          { text: 'Markdown Examples', link: '/blog/markdown-examples' },
          { text: 'Runtime API Examples', link: '/blog/api-examples' },
          { text: 'wsl2 proxy', link: '/blog/wsl2-proxy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 65style',
    },
  }
})
