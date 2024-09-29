/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 14:24:20
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 15:00:32
 * @FilePath: \src\locales\i18n.ts
 */
import i18n from 'i18next'
// 获取浏览器默认语言
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en_US from './lang/en_US'
import zh_CN from './lang/zh_CN'

const defaultLang = localStorage.getItem('i18nextLng') || import.meta.env.VITE_DEFAULT_APP_LANG
i18n
  // 检测用户语言
  .use(LanguageDetector)
  // 将i18n实例传递给react-i18next。
  .use(initReactI18next)
  // 初始化
  .init({
    debug: import.meta.env.VITE_APP_ENV === 'development' ? true : false,
    // 要使用的语言(覆盖语言检测)
    lng: defaultLang, // localstorage -> i18nextLng: zh_CN
    // 如果没有可用的用户语言翻译，则使用的语言。
    fallbackLng: import.meta.env.VITE_DEFAULT_APP_LANG,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    // 要初始化的资源(如果不使用加载或不使用addResourceBundle追加)
    resources: {
      en_US: { translation: en_US },
      zh_CN: { translation: zh_CN }
    }
  })

export default i18n
export const { t } = i18n
