/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 15:32:22
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-08 21:27:25
 * @FilePath: \src\theme\antd\theme.ts
 */
import { ThemeConfig } from 'antd'

export const themeModeToken: Record<'dark' | 'light', ThemeConfig> = {
  dark: {
    token: {
      colorPrimary: '#aaa',
      colorBgContainer: '#161c24'
    }
  },
  light: {
    token: {
      colorPrimary: '#aaa',
      colorBgContainer: '#f5f5f5'
    }
  }
}
