/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 17:06:20
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 17:23:13
 * @FilePath: \src\layout\index.tsx
 */
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-mC text-white p-4">
        <h1 className="text-2xl font-bold">yosong</h1>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="bg-mC text-white p-4">
        <p className="text-center">© 2024 yosong. All rights reserved.</p>
      </footer>
    </div>
  )
}
