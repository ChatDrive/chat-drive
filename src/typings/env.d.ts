/**
 * 后台服务环境类型
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - prod: 后台生产环境
 */
type ServiceEnvType = 'dev' | 'test' | 'prod';

/** 后台服务环境配置 */
interface ServiceEnvConfig {
  url: string;
}

interface ServiceEnvConfigWithProxyPattern extends ServiceEnvConfig {
  /**
   * 匹配路径的正则字符串
   * - 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用)
   * - 与后端请求地址的前缀无关
   * - 有多个后端请求实例时，需要创建不同的值
   */
  proxyPattern: '/proxy-pattern';
}

interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 项目描述 */
  readonly VITE_APP_DESC: string;
  /**
   * 权限路由模式：
   * - static - 前端声明的静态路由
   * - dynamic - 后端返回的动态路由
   */
  readonly VITE_AUTH_ROUTE_MODE: 'static' | 'dynamic';
  /** 路由首页路径 */
  readonly VITE_ROUTE_HOME_PATH: string;
  /** iconify图标作为组件的前缀 */
  readonly VITE_ICON_PREFIX: string;
  /**
   * 本地SVG图标作为组件的前缀, 注意需要包含 VITE_ICON_PREFIX
   * - 格式 {VITE_ICON_PREFIX}-{本地图标集合名称}
   * - 例如：icon-local
   */
  readonly VITE_ICON_LOCAL_PREFIX: string;
}