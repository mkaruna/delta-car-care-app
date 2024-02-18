import { createWebHistory, createRouter } from "vue-router";

import Home from "@/components/delta-home.vue"
import contactUs from "@/components/contact-us.vue"
import deltaCombos from "@/components/delta-combo-packages.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact-us",
    name: "contactus",
    component: contactUs,
  },
  {
    path: "/car-care-combos",
    name: "deltaCombos",
    component: deltaCombos,
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router