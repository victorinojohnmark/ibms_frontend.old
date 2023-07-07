<template>
<div class="antialiased bg-gray-50 dark:bg-gray-900">
    <TopBarMenu />
    <!-- Sidebar -->
    <SideBarMenu v-if="authStore.user"/>
    <main class="p-4 md:ml-64 h-auto pt-20 min-h-screen">
      <RouterView />
    </main>
  </div>
<!--   
  <div v-if="authStore.user">
    <TopBarMenu />
    <div class="flex bg-white pt-16">
        <SideBarMenu />
        <div id="main-content" class="flex flex-col w-full bg-gray-50 relative lg:ml-64 h-default-116px">
          <main class=" flex-grow mt-4 mx-4">
              <RouterView />
          </main>
        </div>
    </div>
  </div>

  <div v-else>
    <TopBarMenu />
    <div class="flex bg-white pt-16">
        <div id="main-content" class="flex flex-col w-full bg-gray-50 relative h-default-116px">
          <main class=" flex-grow mt-4 mx-4">
              <RouterView />
          </main>
        </div>
    </div>
  </div> -->
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