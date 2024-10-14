/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-30 11:48:19
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-14 11:18:04
 * @FilePath: \src\layout\style\layoutStyle.tsx
 */
export const siderStyle: React.CSSProperties = {
  height: '100vh',
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset'
}
export const headerStyle: React.CSSProperties = {
  height: 64,
  zIndex: 9,
  padding: '0 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}
export const contentStyle: React.CSSProperties = {
  height: 'calc(100vh - 64px)',
  overflow: 'auto',
  padding: '10px 12px'
}
