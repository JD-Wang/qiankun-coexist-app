import { createApp } from 'vue'
import App from './App.vue'
import { userRouter } from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root

function render(props) {
  const { container } = props
  root = createApp(App)
  const c = container ? container.querySelector('#subApp') : document.getElementById('subApp')
  root.mount(c)
  console.log('【子应用1】 render app')
}

console.log('【子应用1】 main执行')

renderWithQiankun({
  bootstrap() {
    console.log('【子应用1】 bootstrap')
  },
  mount(props) {
    console.log('【子应用1】 mount  ')
    render(props)
  },
  unmount(props) {
    console.log('【子应用1】 unmount')
    root.unmount()
  },
  update(props) {
    console.log('【子应用1】 update')
    console.log(props)
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
