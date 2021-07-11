import { RouteRecordRaw } from "vue-router"
import Main from "@/views/Main.vue"

const Router: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
]

export default Router
