import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import progress from 'vite-plugin-progress';
import vueDevtools from 'vite-plugin-vue-devtools';
import unplugin from './unplugin';
import mock from './mock';
import visualizer from './visualizer';
import compress from './compress';
import pwa from './pwa';

/**
 * vite插件配置
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  viteEnv: ImportMetaEnv,
): PluginOption | PluginOption[] {
  const plugins = [
    vue({
      script: {
        defineModel: true,
      },
    }),
    vueDevtools(),
    ...unplugin(viteEnv),
    mock(viteEnv),
    progress(),
  ];

  if (viteEnv.VITE_VISUALIZER === 'Y')
    plugins.push(visualizer() as PluginOption);

  if (viteEnv.VITE_COMPRESS === 'Y') plugins.push(compress(viteEnv));

  if (viteEnv.VITE_PWA === 'Y') plugins.push(pwa());

  return plugins;
}
