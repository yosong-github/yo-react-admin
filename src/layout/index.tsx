/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 17:06:20
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-10 22:01:12
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
import Menu from './cpns/Menu'

const { Header, Sider, Content } = AntdLayout

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBorder, colorBgElevated }
  } = theme.useToken()
  const config = useConfig()
  const { themeMode } = config
  const { setConfig } = useConfigActions()
  const { locale, setLocale } = useLocale()
  const { t } = useTranslation()

  return (
    <>
      <AntdLayout className="full-height full-width">
        <Sider
          style={{
            ...siderStyle,
            backgroundColor: colorBgElevated,
            borderRight: `1px solid ${colorBorder}`
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="h-64px">logo</div>
            <Menu />
          </div>
        </Sider>
        <AntdLayout>
          <Header
            style={{
              ...headerStyle,
              backgroundColor: colorBgElevated,
              borderBottom: `1px solid ${colorBorder}`
            }}
          >
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
          <Content style={{ ...contentStyle, backgroundColor: colorBgElevated }}>
            <Outlet />
          </Content>
        </AntdLayout>
      </AntdLayout>
    </>
  )
}
