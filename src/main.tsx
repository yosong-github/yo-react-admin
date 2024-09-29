/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 11:25:56
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 14:12:21
 * @FilePath: \src\main.tsx
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@/theme/index.css'
import 'virtual:uno.css'

// i18n
import './locales/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
