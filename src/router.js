import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './pages/Welcome.vue'
import Notes from './pages/Notes.vue'
import MoodBoard from './pages/MoodBoard.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/notes', component: Notes },
  { path: '/moodboard', component: MoodBoard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
