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
      { text: 'Blog', link: '/blog/Pu_Shu-I_Go_To_2000-CN-CD-FLAC-1999-BiGBiGWOLF' },
      { text: 'Tags', link: '/tags' },
      { text: 'About', link: '/about' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Markdown',
        items: [
          { text: 'Markdown Examples', link: '/blog/markdown-examples' },
          { text: 'Runtime API Examples', link: '/blog/api-examples' }
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
