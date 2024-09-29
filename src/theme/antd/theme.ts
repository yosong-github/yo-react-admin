/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 15:32:22
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 16:23:07
 * @FilePath: \src\theme\antd\theme.ts
 */
import { ThemeConfig } from 'antd'

const colorPrimary = localStorage.getItem('colorPrimary')
export const themeModeToken: Record<'dark' | 'light', ThemeConfig> = {
  dark: {
    token: {
      colorPrimary: colorPrimary ?? '#117376'
    }
  },
  light: {
    token: {
      colorPrimary: colorPrimary ?? '#117376'
    }
  }
}
