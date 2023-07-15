<template>
   <aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-14 font-normal duration-75 lg:flex transition-width" :class="{ 'hidden': !useNavigation.sideBarMenuVisibility }" aria-label="Sidebar">
  <div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col flex-1 pt-2 pb-4 overflow-y-auto">
      <div class="flex-1 px-3 space-y-1 pt-2 bg-white dark:bg-gray-800">

         <div v-for="menu in menus" class="space-y-2">
            <ul class="">
               <li v-for="submenu in menu" class="my-1">
                  <DropDownMenu v-if="submenu.submenu" :name="submenu.name" :icon="submenu.icon" :sub-menus="submenu.submenu"  />

                  <BaseMenu v-else :route-name="submenu.routeName" :title="submenu.name" :icon="submenu.icon" />
               </li>
            </ul>
         </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 justify-left hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800" sidebar-bottom-menu="">
      
      <a href="#" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        <FingerPrintIcon class="w-6 h-6"/>
      </a>
      <a href="#" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
         <AdjustmentsVerticalIcon class="w-6 h-6" />
      </a>

      
      
    </div>
  </div>
</aside>
<div class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90" :class="{ 'hidden': !useNavigation.sideBarMenuVisibility }" id="sidebarBackdrop"></div>

</template>

<script setup>
import { FingerPrintIcon, AdjustmentsVerticalIcon } from '@heroicons/vue/24/solid'
import { useNavigationStore } from '../../stores/navigation'
import { onMounted } from 'vue';
import { initDropdowns } from 'flowbite'
import menus from '../../router/menus';

import DropDownMenu from './DropDownMenu.vue'
import BaseMenu  from './BaseMenu.vue'

const useNavigation = useNavigationStore()

onMounted(() => {
   useNavigation.hideSideBarMenu()
   initDropdowns()
})
</script>