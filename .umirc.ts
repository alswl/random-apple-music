import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/antd'],
  antd: {},
  title: 'Random Apple Music',
});
