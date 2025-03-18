import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  // 注意使用ES模块导入方式
import microOtp from '../views/microOtp.vue'  // 注意使用ES模块导入方式

// 静态路由
const routes = [
  {
    path: '/',
    component: HomeView,
    redirect: '/microOtp/home',
  },
  {
    path: '/microOtp/:page*',
    name: 'microOtp',
    component: microOtp,
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router