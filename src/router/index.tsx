/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 16:58:01
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 17:44:46
 * @FilePath: \src\router\index.tsx
 */
import { Navigate, type RouteObject, RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from '@/layout/index'
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home'))

export default function Router() {
  const routers: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={'/home'} replace /> },
        {
          path: '/home',
          element: <Home />
        }
      ]
    }
  ]
  const router = createHashRouter(routers)

  return <RouterProvider router={router} />
}
