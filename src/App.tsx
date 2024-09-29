/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 11:25:56
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 17:14:01
 * @FilePath: \src\App.tsx
 */

import { App as AntdApp } from 'antd'
import AntdConfig from './theme/antd'
import Router from '@/router/index'
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
        <Router />
      </AntdApp>
    </AntdConfig>
  )
}

export default App
