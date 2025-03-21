import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'
import router from './router'

microApp.start()

createApp(App).use(router).mount('#app')
