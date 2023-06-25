import { createRouter, createWebHistory } from 'vue-router'
import { useNavigationStore } from '../stores/navigation'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const useNavigation = useNavigationStore()

  useNavigation.hideSideBarMenu()
  next()
})


export default router
