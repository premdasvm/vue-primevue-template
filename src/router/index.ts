import { routes as fileRoutes } from 'vue-router/auto/routes'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:meta-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(fileRoutes)
})

export default router
