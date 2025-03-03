import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  // 注意使用ES模块导入方式
import AboutView from '../views/AboutView.vue'  // 注意使用ES模块导入方式

// 静态路由
const routes = [
  {
    path: '/home',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  }
]
const router = createRouter({
  history: createWebHashHistory(window.__MICRO_APP_BASE_ROUTE__ ? `/#${window.__MICRO_APP_BASE_ROUTE__}` : import.meta.env.BASE_URL),
  routes
})

export default router