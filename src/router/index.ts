import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Weather from "../views/Weather.vue";
import About from "../views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Weather",
    component: Weather
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
