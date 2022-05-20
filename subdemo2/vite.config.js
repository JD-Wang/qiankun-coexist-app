import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import { name } from './package.json'
import path from 'path'

const useDevMode = true

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'http://127.0.0.1:5501',
  // base: 'http://127.0.0.1:5500/subdemo2/dist',
  plugins: [
    vue(),
    qiankun('subapp2', {
      useDevMode
    })
  ]
})
