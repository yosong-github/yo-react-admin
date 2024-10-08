/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-30 11:48:19
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-08 21:25:05
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
  zIndex: 9
}
export const contentStyle: React.CSSProperties = {
  height: 'calc(100vh - 64px)',
  overflow: 'auto',
  padding: '10px 12px'
}
