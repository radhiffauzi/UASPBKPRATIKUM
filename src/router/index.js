import { createRouter, createWebHistory } from 'vue-router'
import WeatherWidget from '../components/WeatherWidget.vue'

const routes = [
  {
    path: '/',
    name: 'Weather',
    component: WeatherWidget
  },
  {
    path: '/tugas1',
    name: 'Tugas1',
    beforeEnter() { location.href = 'https://radif-project-cv.netlify.app/'; }
  },
  {
    path: '/tugas2',
    name: 'Tugas2',
    beforeEnter() { location.href = 'http://tugas2pbk-223510524.vercel.app/'; }
  },
  {
    path: '/tugas3',
    name: 'Tugas3',
    beforeEnter() { location.href = 'http://prakpbk3-radhif-fauzi.vercel.app/'; }
  },
  {
    path: '/tugas4',
    name: 'Tugas4',
    beforeEnter() { location.href = 'http://tugas-4-pbk-sigma.vercel.app/'; }
  },
  {
    path: '/tugas5',
    name: 'Tugas5',
    beforeEnter() { location.href = 'https://prak-tugas5pbk.vercel.app/'; }
  },
  {
    path: '/tugas6',
    name: 'Tugas6',
    beforeEnter() { location.href = 'https://radiffauzi-tugas6pbk.vercel.app/'; }
  },
  {
    path: '/tugas7',
    name: 'Tugas7',
    beforeEnter() { location.href = 'https://prak7pbk.vercel.app/'; }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
