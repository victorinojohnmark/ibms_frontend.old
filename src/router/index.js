import { createRouter, createWebHistory } from 'vue-router'
import { useNavigationStore } from '../stores/navigation'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: { requiresAuth: false }
    }
  ]
})

// router.beforeEach(async (to, from, next) => {
//   const useNavigation = useNavigationStore()
//   // const authStore = useAuthStore()

//   useNavigation.hideSideBarMenu()
  
//   // authStore.resetErrorAndStatus()

//   // if(to.meta.requiresAuth && !authStore.user) {
//   //   next({ path: '/login', query: { auth: 'false' } });
//   // } else {
//   //   authStore.getUser()
//   //   next ()
//   // }



// })


export default router
