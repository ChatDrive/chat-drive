import ViteCompression from 'vite-plugin-compression';

export default function setupViteCompression(viteEnv: ImportMetaEnv) {
  const { VITE_COMPRESS_TYPE = 'gzip' } = viteEnv;

  return ViteCompression({ algorithm: VITE_COMPRESS_TYPE });
}
