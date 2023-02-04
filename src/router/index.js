import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import astroWeather from '../views/astro-weather.vue'
import moonCal from '../views/moon-cal.vue'
import locations from '../components/locations/locations.vue'
import contactUs from "../views/contact-us.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/astro-weather/',
      name: 'astro-weather',
      component: astroWeather
    },
    {
      path: '/moon-cal/',
      name: 'moon-cal',
      component: moonCal
    },
    {
      path: '/locations/',
      name: 'locations',
      component: locations
    },
    {
      path: '/contact-us/',
      name: 'contact-us',
      component: contactUs
    },
  ]
})

export default router
