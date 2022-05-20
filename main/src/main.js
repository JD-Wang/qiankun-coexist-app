// import { createApp } from 'vue'
// import App from './App.vue'

import { registerMicroApps, start, loadMicroApp } from 'qiankun'

// registerMicroApps([
//   {
//     name: 'subapp', // app name registered
//     entry: '//localhost:3001',
//     container: '#sub-container',
//     activeRule: '/subdemo',
//     loader: val => {}
//   },
//   {
//     name: 'subapp2', // app name registered
//     entry: '//localhost:3002',
//     container: '#sub-container2',
//     activeRule: '/subdemo'
//   }
// ])

// start()

console.log('【基座】main 执行')

loadMicroApp({
  name: 'subapp', // app name registered
  entry: '//localhost:3001',
  // entry: 'http://127.0.0.1:5500/subdemo/dist/',
  container: '#sub-container'
}).bootstrapPromise.then(() => {
  console.log('【子应用2】子应用1 bootstrapPromise 回调后开始loadMicroApp ')
  loadMicroApp({
    name: 'subapp2', // app name registered
    entry: '//localhost:3002',
    // entry: 'http://127.0.0.1:5500/subdemo2/dist/',
    container: '#sub-container2'
  })
})

// createApp(App).mount('#app')
