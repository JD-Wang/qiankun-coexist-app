import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/subdemo',
    name: 'index',
    meta: {
      title: '首页'
    }
  }
]

export const userRouter = function (base) {
  return createRouter({
    base: '/subdemo',
    // todo 改成history模式
    history: createWebHistory('/subdemo'),
    routes
  })
}
