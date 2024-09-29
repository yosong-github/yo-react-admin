/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 13:30:34
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 16:50:59
 * @FilePath: \src\components\YoButton.tsx
 */
import { FC, PropsWithChildren, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type tColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'

interface IButtonProps {
  color: tColor
  icon?: string
  link?: boolean
}

type NativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
type AnchorButtonProps = IButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = Partial<NativeButtonProps | AnchorButtonProps>

const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  const { color = 'blue', icon, link, children, ...restProps } = props

  console.log(color, 'color')

  if (link) {
    return <a {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>
  } else {
    return (
      <button
        className="py-2
        px-4
        font-semibold
        rounded-lg
        shadow-md
        border-none
        cursor-pointer
        m-1"
        {...(restProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
        {icon}
      </button>
    )
  }
}

export default Button
