<template>
  <div class="bg-red-900">
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
</template>

<script setup>
import { RouterView } from 'vue-router'
import TopBarMenu from './components/system/TopBarMenu.vue'
import SideBarMenu from './components/system/SideBarMenu.vue'
// import Footer from './components/system/Footer.vue';


</script>