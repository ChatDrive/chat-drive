import { visualizer } from 'rollup-plugin-visualizer';

export default function setupVisualizer() {
  visualizer({
    gzipSize: true,
    brotliSize: true,
    open: true,
  });
}
