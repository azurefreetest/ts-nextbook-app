declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly NODE_ENV: 'development' | 'production' | 'test' | 'hoge'
    readonly NEXT_PUBLIC_LOGFLARE_API_KEY: string
    readonly NEXT_PUBLIC_LOGFLARE_SOURCE_ID: string
  }
}
