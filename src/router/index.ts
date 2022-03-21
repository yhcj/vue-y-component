import { createRouter, createWebHashHistory, Router, RouteRecordRaw, RouterOptions } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/job'
  }, {
    path: '/job',
    name: 'job',
    component: () => import('../views/Job.vue'),
  }
]

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes: routes,
}

const router: Router = createRouter(options);
export default router
