import { defineConfig, loadEnv } from 'vite';
import {
  createViteProxy,
  setupVitePlugins,
  viteDefine,
  getRootPath,
  getSrcPath,
} from './build';
import { getServiceConfig } from './.env-config';

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(
    configEnv.mode,
    process.cwd(),
  ) as unknown as ImportMetaEnv;

  const rootPath = getRootPath();

  const srcPath = getSrcPath();

  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'Y';

  const envConfig = getServiceConfig(viteEnv);

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    define: viteDefine,
    plugins: [setupVitePlugins(viteEnv)],
    css: {},
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: true,
      proxy: createViteProxy(isOpenProxy, envConfig),
    },
    optimizeDeps: {
      include: [],
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: true,
      },
    },
  };
});
