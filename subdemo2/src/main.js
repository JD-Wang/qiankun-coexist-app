import { createApp } from 'vue'
import App from './App.vue'
import { userRouter } from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root
function render(props) {
  const { container } = props
  root = createApp(App)
  const c = container ? container.querySelector('#subApp2') : document.getElementById('subApp2')
  root.mount(c)
  console.log('【子应用2】 render app')
}

console.log('【子应用2】 main 执行')

renderWithQiankun({
  bootstrap() {
    console.log('【子应用2】 bootstrap')
  },
  mount(props) {
    console.log('【子应用2】 mount  ')
    render(props)
  },
  unmount(props) {
    console.log('【子应用2】 unmount')
    root.unmount()
  },
  update(props) {
    console.log('【子应用2】 update')
    console.log(props)
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
