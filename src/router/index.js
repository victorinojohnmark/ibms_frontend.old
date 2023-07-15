import { createRouter, createWebHistory } from 'vue-router'
import { useNavigationStore } from '../stores/navigation'
import { useAuthStore } from '../stores/auth'
import { useSystemStore } from '../stores/system'

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
    },
    {
      path: '/chart-of-accounts',
      name: 'Chart of Accounts',
      component: () => import('../views/generalledger/ChartOfAccount/ChartOfAccountView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/payees',
      name: 'Payees',
      component: () => import('../views/payables/payees/PayeesView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const useNavigation = useNavigationStore()
  const authStore = useAuthStore()
  const systemStore = useSystemStore()

  useNavigation.hideSideBarMenu()
  authStore.resetErrorAndStatus()
  systemStore.reset()

  if(to.meta.requiresAuth && !authStore.user) {
    next({ path: '/login', query: { auth: 'false' } });
  } else if(authStore.user && to.path == '/login') {
    next({ path: '/', query: { auth: 'true' } });
  } else {
    next ()
  }



})


export default router
