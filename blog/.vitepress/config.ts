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
      { text: 'CSS Tricks', link: '/css/tab-circle-border' },
      { text: 'Aria2', link: 'https://aria2.65style.eu.org' },
      { text: 'OneDrive', link: 'https://oneindex.65style.eu.org' },
    ],

    sidebar: [
      {
        text: 'CSS Tricks',
        items: [
          { text: 'Tab Circle Border', link: '/css/tab-circle-border' },
        ],
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
