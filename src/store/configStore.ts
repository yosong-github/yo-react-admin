/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 16:29:13
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 16:46:56
 * @FilePath: \src\store\configStore.ts
 */
import { ThemeMode } from '@/theme/types/enum'
import { create } from 'zustand'

type themeType = {
  themeMode: ThemeMode
}
type ConfigStore = {
  config: themeType
  // 使用 actions 命名空间来存放所有的 action
  actions: {
    setConfig: (settings: themeType) => void
  }
}
const useConfigStore = create<ConfigStore>(set => ({
  config: {
    themeMode: ThemeMode.Light
  },
  actions: {
    setConfig: config => {
      set(() => ({ config }))
    }
  }
}))

export const useConfig = () => useConfigStore(state => state.config)
export const useConfigActions = () => useConfigStore(state => state.actions)
