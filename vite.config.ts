import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入path问题1：找不到模块“path”或其相应的类型声明
// 解决方案：https://blog.csdn.net/gaoxiaoba/article/details/117818662
// 引入path问题2：模块 ""path"" 只能在使用 "allowSyntheticDefaultImports" 标志时进行默认导入
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/styles/variable.less";'
      }
    }
  },
  // lib模式打包
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.js'),
      name: 'yComponent',
      fileName: (format) => `y-component.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
