/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 11:25:56
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 13:08:44
 * @FilePath: \vite.config.ts
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  base: './',
  resolve: {
    // 路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    // 自动打开浏览器
    open: true,
    host: true
  }
})
