import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { ElementPlusResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
  },
  plugins: [vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver(),AntDesignVueResolver(),IconsResolver({ prefix: 'Icon' })],
    }),
    Components({
      resolvers: [ElementPlusResolver(),AntDesignVueResolver({importStyle:false}), IconsResolver({ enabledCollections: ['ep'],})],
    }),
    Icons({
      autoInstall: true,
    }),
    Inspect()],
  resolve: {
    alias: {
      '@': resolve(__dirname,'src'),
    },
  }
})
