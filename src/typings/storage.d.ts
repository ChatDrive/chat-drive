declare namespace StorageInterface {
  /** localStorage的主题存储数据类型 */
  interface Session {
    /** 主题颜色 */
    themeColor: string;
    /** 主题配置 */
    themeSettings: Theme.Setting;
  }

  /** localStorage的本地存储数据类型 */
  interface Local {
    /** 用户token */
    token: string;
    /** 用户刷新token */
    refreshToken: string;
    /** 用户信息 */
  }
}
