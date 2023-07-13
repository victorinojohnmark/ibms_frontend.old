<template>
<div class="antialiased bg-gray-50 dark:bg-gray-900">
    <TopBarMenu />
    <!-- Sidebar -->
    <SideBarMenu v-if="authStore.user"/>
    <main class="p-4 lg:ml-64 h-auto pt-20 min-h-screen">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TopBarMenu from './components/system/TopBarMenu.vue'
import SideBarMenu from './components/system/SideBarMenu.vue'

import { useAuthStore } from './stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore()

onMounted(() => {
  authStore.initialize()
})



</script>