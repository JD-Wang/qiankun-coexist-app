import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import { name } from './package.json'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const isDev = mode === 'development'
  const useDevMode = isDev
  console.log(mode, useDevMode, 'bbbbbbbbbbbbbbbb')
  return defineConfig({
    // base: 'http://127.0.0.1:5500',
    // base: 'http://127.0.0.1:5500/subdemo/dist',
    plugins: [
      vue(),
      qiankun('subdemo', {
        useDevMode
      })
    ]
    // configureWebpack: {
    //   output: {
    //     library: `${name}-[name]`,
    //     libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    //     jsonpFunction: `webpackJsonp_${name}`,
    //   },
    // },
    // build: {
    //   lib: {
    //     name,
    //     entry: path.resolve(__dirname, './src/main.js'),
    //     formats: ['umd']
    //   }
    // }
  })
}
