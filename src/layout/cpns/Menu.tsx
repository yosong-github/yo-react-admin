/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-30 10:47:58
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-10 22:14:05
 * @FilePath: \src\layout\cpns\Menu.tsx
 */

import { Menu as AntdMenu, type MenuProps, theme } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    children: [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' }
    ]
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' }
        ]
      }
    ]
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' }
    ]
  }
]

export default function Menu() {
  const {
    token: { colorBgElevated }
  } = theme.useToken()

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e)
  }
  return (
    <>
      <AntdMenu
        className="h-full !border-none select-none"
        style={{
          background: colorBgElevated
        }}
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </>
  )
}
