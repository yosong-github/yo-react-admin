/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 11:25:56
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 16:48:16
 * @FilePath: \src\App.tsx
 */

import { App as AntdApp } from 'antd'
import AntdConfig from './theme/antd'
// import { useTranslation } from 'react-i18next'
// import useLocale from './locales/useLocale'
// import { useConfigActions, useConfig } from '@/store/configStore'
// import { ThemeMode } from './theme/types/enum'

function App() {
  // const { t } = useTranslation()
  // const { setLocale, locale } = useLocale()
  // const { setConfig } = useConfigActions()
  // const { themeMode } = useConfig()

  return (
    <AntdConfig>
      <AntdApp>
        <h1>嘿嘿</h1>
      </AntdApp>
    </AntdConfig>
  )
}

export default App
