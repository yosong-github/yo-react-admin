/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 17:06:20
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-30 12:02:47
 * @FilePath: \src\layout\index.tsx
 */
import { Outlet } from 'react-router-dom'
import { useConfig } from '@/store/configStore'

import { Button, Layout as AntdLayout, theme } from 'antd'
import { useState } from 'react'
import { contentStyle, headerStyle, siderStyle } from './style/layoutStyle'

const { Header, Sider, Content } = AntdLayout

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const { colorSideBar, colorHeader } = useConfig()

  return (
    <>
      <AntdLayout className="full-height full-width">
        <Sider
          style={{ ...siderStyle, backgroundColor: colorSideBar }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          我是侧边栏
        </Sider>
        <AntdLayout style={{ marginInlineStart: 200 }}>
          <Header style={{ ...headerStyle, backgroundColor: colorHeader }}>
            header
            <Button type="primary" onClick={() => setCollapsed(!collapsed)}>
              切换
            </Button>
          </Header>
          <Content style={{ ...contentStyle, backgroundColor: colorBgContainer }}>
            <Outlet />
          </Content>
        </AntdLayout>
      </AntdLayout>
    </>
  )
}
