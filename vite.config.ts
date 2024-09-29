/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 11:25:56
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 12:09:59
 * @FilePath: \vite.config.ts
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
