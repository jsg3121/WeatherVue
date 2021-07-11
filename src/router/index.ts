import { createRouter, createWebHistory } from "vue-router"
import Router from "./src/Router"

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...Router],
})

export default router
