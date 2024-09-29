/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: 'development' | 'production'
  readonly VITE_DEFAULT_APP_LANG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
