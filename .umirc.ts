import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/antd'],
  antd: {},
  title: 'Random Apple Music',
  favicons: [
    // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
    '/favicon.svg'
  ]
});
