/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 17:24:26
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-30 11:15:04
 * @FilePath: \src\pages\Home.tsx
 */
import { Button } from 'antd'
import { useConfig } from '@/store/configStore'

function Home() {
  const config = useConfig()
  console.log(config)

  return (
    <>
      <div style={{ height: 10000 }}>
        <Button type="primary">你好！ 我是首页</Button>
      </div>
    </>
  )
}

export default Home
