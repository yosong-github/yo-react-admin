/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 17:06:20
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-14 11:49:38
 * @FilePath: \src\layout\index.tsx
 */
import { Outlet } from 'react-router-dom'
import { useConfig } from '@/store/configStore'
import styled from 'styled-components'

import { Layout as AntdLayout, theme } from 'antd'
import { useState } from 'react'
import { contentStyle, siderStyle } from './style/layoutStyle'
import { ThemeMode } from '@/theme/types/enum'
import Menu from './cpns/Menu'
import YoLogo from './cpns/YoLogo'
import Header from './cpns/Header'

const { Sider, Content } = AntdLayout

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBorder, colorBgElevated }
  } = theme.useToken()
  const config = useConfig()
  const { themeMode } = config

  return (
    <StyleWrapper $themeMode={themeMode}>
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
          <div className="h-full">
            <YoLogo />
            <Menu />
          </div>
        </Sider>
        <AntdLayout>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />

          <Content style={{ ...contentStyle, backgroundColor: colorBgElevated }}>
            <Outlet />
          </Content>
        </AntdLayout>
      </AntdLayout>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.div<{ $themeMode?: ThemeMode }>`
  /* 设置滚动条的整体样式 */
  ::-webkit-scrollbar {
    width: 8px; /* 设置滚动条宽度 */
  }

  /* 设置滚动条轨道的样式 */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: ${props => (props.$themeMode === ThemeMode.Dark ? '#2c2c2c' : '#FAFAFA')};
  }

  /* 设置滚动条滑块的样式 */
  ::-webkit-scrollbar-thumb,
  .simplebar-scrollbar::before {
    border-radius: 10px;
    background: ${props => (props.$themeMode === ThemeMode.Dark ? '#6b6b6b' : '#C1C1C1')};
  }

  /* 设置鼠标悬停在滚动条上的样式 */
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => (props.$themeMode === ThemeMode.Dark ? '#939393' : '##7D7D7D')};
  }
`
