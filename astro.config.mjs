// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import data from './src/data/project';
const { siteUrl, baseUrl, port } = data;

const assetsDir = 'assets';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: baseUrl,
  integrations: [icon()],
  server: {
    port: port,
  },
  outDir: `./dist${baseUrl}`,
  build: {
    assets: assetsDir,
    inlineStylesheets: 'never', // css外部ファイル化のため
  },
  vite: {
    build: {
      assetsInlineLimit: 0, // 小さなファイルでもインライン化しない
      cssCodeSplit: false, // CSS分割を無効化して1つのファイルに統合
      rollupOptions: {
        output: {
          entryFileNames: () => {
            let fileName = 'script';
            return `${assetsDir}/js/${fileName}.js`;
          },
          assetFileNames: (info) =>
            info.names[0].endsWith('.css')
              ? `${assetsDir}/css/style[extname]`
              : info.names[0].endsWith('.js')
                ? `${assetsDir}/js/[name][extname]`
                : `${assetsDir}/image/[name][extname]`,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/styles/global.scss' as *;`,
        },
      },
    },
  },
});
