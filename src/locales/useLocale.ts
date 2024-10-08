/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 14:55:49
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-08 21:16:07
 * @FilePath: \src\locales\useLocale.ts
 */
import en_US from 'antd/locale/en_US'
import zh_CN from 'antd/locale/zh_CN'
import { useTranslation } from 'react-i18next'

import { LocalEnum } from './types/enum'
import type { Locale as AntdLocal } from 'antd/es/locale'

type Locale = keyof typeof LocalEnum
type Language = {
  locale: keyof typeof LocalEnum
  antdLocal: AntdLocal
}

export const LANGUAGE_MAP: Record<Locale, Language> = {
  [LocalEnum.zh_CN]: {
    locale: LocalEnum.zh_CN,
    antdLocal: zh_CN
  },
  [LocalEnum.en_US]: {
    locale: LocalEnum.en_US,
    antdLocal: en_US
  }
}

export default function useLocale() {
  const { i18n } = useTranslation()

  /**
   * localstorage -> i18nextLng change
   */
  const setLocale = (locale: Locale) => {
    i18n.changeLanguage(locale)
  }

  const locale = (i18n.resolvedLanguage || import.meta.env.VITE_DEFAULT_APP_LANG) as Locale

  const language = LANGUAGE_MAP[locale]

  return {
    locale,
    language,
    setLocale
  }
}
