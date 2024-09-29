/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 13:09:40
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 16:14:36
 * @FilePath: \uno.config.ts
 */

import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  // 将多个规则合并为一个速记
  shortcuts: {
    'f-b': 'flex justify-between items-center'
  },
  // 全局主题变量
  theme: {
    colors: {
      mC: 'var(--main-color)'
    }
  },
  // 预设
  presets: [
    // 默认预设
    presetUno(),
    // 支持attributify mode,简单说就是为了避免样式写太长难维护，能将py-2 px-2这种相关属性整合起来写成p="y-2 x-4"
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerAttributifyJsx(), transformerDirectives(), transformerVariantGroup()]
})
