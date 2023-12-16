import { viteMockServe } from 'vite-plugin-mock';

export default function setupViteMockServe(viteEnv: ImportMetaEnv) {
  const prodMock = viteEnv.VITE_PROD_MOCK === 'Y';

  return viteMockServe({
    mockPath: 'mock',
    enable: prodMock,
  });
}
