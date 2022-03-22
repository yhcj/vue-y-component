import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
const { YUI } = require('../packages/index.js')
import 'element-plus/dist/index.css'

// element按需引入
import { components, plugins } from './plugins/element'


// router4
router.beforeEach((to, from, next) => {
  next()
})
const app = createApp(App)
app.use(router)
app.use(YUI)
// 按需注册全局element组件
components.forEach(component => {
  app.component(component.name, component)
})
// 按需注册全局插件
plugins.forEach(plugin => {
  app.use(plugin)
})
app.mount('#app')
