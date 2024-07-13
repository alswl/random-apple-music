import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/antd'],
  antd: {},
  title: 'Random Apple Music',
  favicons: ['/favicon.svg'],
  analytics: {
    ga_v2: 'G-VHWBKY6N6F', // Google Analytics 的 key (GA 4)
  },
});
