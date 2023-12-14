/** 后台服务环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

const serviceEnv: ServiceEnv = {
  dev: {
    url: 'http://localhost:3000',
  },
  test: {
    url: 'http://localhost:3000',
  },
  prod: {
    url: 'http://localhost:3000',
  },
};

/**
 * 获取当前环境模式下的请求服务配置
 * @param env 环境
 */
export function getServiceConfig(
  env: ImportMetaEnv,
): ServiceEnvConfigWithProxyPattern {
  const { VITE_SERVICE_ENV = 'dev' } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return {
    ...config,
    proxyPattern: '/api',
  };
}
