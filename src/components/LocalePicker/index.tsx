import { Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { LocalEnum } from '@/locales/types/enum'
import useLocale, { Locale } from '@/locales/useLocale'

const items: MenuProps['items'] = [
  {
    label: '中文',
    key: LocalEnum.zh_CN
  },
  {
    label: 'English',
    key: LocalEnum.en_US
  }
]

export default function LocalePicker() {
  const { locale, setLocale } = useLocale()

  return (
    <Dropdown
      menu={{
        items,
        onClick: ({ key }) => {
          setLocale(key as Locale)
        }
      }}
      trigger={['click']}
    >
      <a onClick={e => e.preventDefault()}>{locale}</a>
    </Dropdown>
  )
}
