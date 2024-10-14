import { Layout, theme, Button, Space } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { headerStyle } from '../style/layoutStyle'
import { useConfig, useConfigActions } from '@/store/configStore'
import { ThemeMode } from '@/theme/types/enum'
import LocalePicker from '@/components/LocalePicker'

const { Header: AntdHeader } = Layout

type Props = {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export default function Header({ collapsed, setCollapsed }: Props) {
  const {
    token: { colorBorder, colorBgElevated }
  } = theme.useToken()
  const config = useConfig()
  const { setConfig } = useConfigActions()

  const { themeMode } = config
  return (
    <AntdHeader
      style={{
        ...headerStyle,
        backgroundColor: colorBgElevated,
        borderBottom: `1px solid ${colorBorder}`
      }}
    >
      <span
        className="hover:cursor-pointer font-size-24px fw-600"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined className="" />}
      </span>

      <Space>
        <LocalePicker />

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
    </AntdHeader>
  )
}
