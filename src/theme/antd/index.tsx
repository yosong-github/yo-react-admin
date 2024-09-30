/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 14:13:28
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-30 10:14:33
 * @FilePath: \src\theme\antd\index.tsx
 */
import { ConfigProvider, theme } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import useLocale from '@/locales/useLocale'
import { themeModeToken } from './theme'
import { ThemeMode } from '../types/enum'
import { useConfig } from '@/store/configStore'

type Props = {
  children: React.ReactNode
}
export default function AntdConfig({ children }: Props) {
  const { language } = useLocale()
  const { themeMode, colorPrimary } = useConfig()

  const algorithm = themeMode === ThemeMode.Light ? theme.defaultAlgorithm : theme.darkAlgorithm

  return (
    <ConfigProvider
      locale={language.antdLocal}
      theme={{
        token: { ...themeModeToken[themeMode].token, colorPrimary },
        algorithm
      }}
    >
      {/* https://ant.design/docs/react/compatible-style-cn#styleprovider */}
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  )
}
