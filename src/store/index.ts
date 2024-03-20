import type { App } from 'vue';
import { createPinia } from 'pinia';
import { resetSetupStore } from './plugins';

/** 安装状态管理插件pinia */
export function setupStore(app: App) {
  const store = createPinia();
  store.use(resetSetupStore);

  app.use(store);
}

export * from './modules';
export * from './subscribe';
