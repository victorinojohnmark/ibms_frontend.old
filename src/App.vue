<template>
  <div v-if="useAuth.user">
    <TopBarMenu />
    <div class="flex bg-white pt-16">
        <SideBarMenu />
        <div id="main-content" class="flex flex-col w-full bg-gray-50 relative lg:ml-64 h-default-116px">
          <main class=" flex-grow mt-4 mx-4">
              <!-- CONTENT HERE -->
              <RouterView />
          </main>
          <!-- <Footer /> -->
        </div>
    </div>
  </div>

  <div v-else>
    <TopBarMenu />
    <div class="flex bg-white pt-16">
        <div id="main-content" class="flex flex-col w-full bg-gray-50 relative h-default-116px">
          <main class=" flex-grow mt-4 mx-4">
              <!-- CONTENT HERE -->
              <RouterView />
          </main>
          <!-- <Footer /> -->
        </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TopBarMenu from './components/system/TopBarMenu.vue'
import SideBarMenu from './components/system/SideBarMenu.vue'
// import Footer from './components/system/Footer.vue';

import { useAuthStore } from './stores/auth'
import { onMounted } from 'vue';

const useAuth = useAuthStore()

</script>