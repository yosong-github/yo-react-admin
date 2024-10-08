/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 15:32:22
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-10 22:32:01
 * @FilePath: \src\theme\antd\theme.ts
 */
import { ThemeConfig } from 'antd'

export const themeModeToken: Record<'dark' | 'light', ThemeConfig> = {
  dark: {
    token: {
      colorBgContainer: '#161c24',
      colorBgElevated: '#1f2937'
    }
  },
  light: {
    token: {
      colorBgContainer: '#f5f5f5'
    }
  }
}

export const customComponentConfig: ThemeConfig['components'] = {
  Menu: {
    colorFillAlter: 'transparent'
  }
}
