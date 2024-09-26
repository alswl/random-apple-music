import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/antd', '@umijs/plugins/dist/analytics'],
  antd: {},
  title: 'Random Apple Music',

  metas: [
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Random Apple Music',
    },
  ],
  links: [
    {
      rel: 'apple-touch-icon',
      href: '/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      size: '76x76',
      href: '/favicon-76.png',
    },
    {
      rel: 'apple-touch-icon',
      size: '120x120',
      href: '/favicon-120.png',
    },
    {
      rel: 'apple-touch-icon',
      size: '152x152',
      href: '/favicon-152.png',
    },
  ],
  favicons: ['/favicon.svg'],
  analytics: {
    ga_v2: 'G-VHWBKY6N6F', // Google Analytics 的 key (GA 4)
  },
});
