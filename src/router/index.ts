import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PaginaPrincipal from '../views/PaginaPrincipal.vue'
import PaginaLogin from '../views/PaginaLogin.vue'
import PaginaJogo from '../views/PaginaJogo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: PaginaPrincipal
  },
  {
    path: '/login',
    name: 'login',
    component: PaginaLogin
  },
  {
    path: '/jogo',
    name: 'jogo',
    component: PaginaJogo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
