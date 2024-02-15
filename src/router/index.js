import { createWebHistory, createRouter } from "vue-router";

import Home from "@/components/delta-home.vue"
import contactUs from "@/components/contact-us.vue"
import deltaservices from "@/components/delta-services.vue"

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
    path: "/car-care-services",
    name: "deltaservices",
    component: deltaservices,
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router