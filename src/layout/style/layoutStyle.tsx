/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-30 11:48:19
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-30 11:54:10
 * @FilePath: \src\layout\style\layoutStyle.tsx
 */
export const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset'
  // backgroundColor: '#fff'
}
export const headerStyle: React.CSSProperties = {
  height: 64,
  zIndex: 9
  // backgroundColor: '#fff'
}
export const contentStyle: React.CSSProperties = {
  height: 'calc(100vh - 64px)',
  overflow: 'auto',
  padding: '10px 12px'
}
