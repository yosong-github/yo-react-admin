/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 17:06:20
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-08 21:29:54
 * @FilePath: \src\layout\index.tsx
 */
import { Outlet } from 'react-router-dom'
import { useConfig, useConfigActions } from '@/store/configStore'

import { Button, Layout as AntdLayout, theme, Space } from 'antd'
import { useState } from 'react'
import { contentStyle, headerStyle, siderStyle } from './style/layoutStyle'
import useLocale from '@/locales/useLocale'
import { useTranslation } from 'react-i18next'
import { LocalEnum } from '@/locales/types/enum'
import { ThemeMode } from '@/theme/types/enum'

const { Header, Sider, Content } = AntdLayout

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const config = useConfig()
  const { themeMode } = config
  const { setConfig } = useConfigActions()
  const { locale, setLocale } = useLocale()
  const { t } = useTranslation()

  return (
    <>
      <AntdLayout className="full-height full-width">
        <Sider style={{ ...siderStyle }} trigger={null} collapsible collapsed={collapsed}>
          我是侧边栏
        </Sider>
        <AntdLayout>
          <Header style={{ ...headerStyle }}>
            <Space>
              <Button type="primary" onClick={() => setCollapsed(!collapsed)}>
                切换菜单展开状态
              </Button>
              <Button
                type="primary"
                onClick={() =>
                  setLocale(locale == LocalEnum.en_US ? LocalEnum.zh_CN : LocalEnum.en_US)
                }
              >
                {t('common.checkLang')}
              </Button>
              <Button
                type="primary"
                onClick={() =>
                  setConfig({
                    ...config,
                    themeMode: themeMode == ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark
                  })
                }
              >
                切换主题模式（日/夜）
              </Button>
            </Space>
          </Header>
          <Content style={{ ...contentStyle, backgroundColor: colorBgContainer }}>
            {JSON.stringify(colorBgContainer)}
            <Outlet />
          </Content>
        </AntdLayout>
      </AntdLayout>
    </>
  )
}
