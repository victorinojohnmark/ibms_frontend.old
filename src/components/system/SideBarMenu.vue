<template>
   <aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-14 font-normal duration-75 lg:flex transition-width" :class="{ 'hidden': !useNavigation.sideBarMenuVisibility }" aria-label="Sidebar">
  <div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col flex-1 pt-2 pb-4 overflow-y-auto">
      <div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

         <div v-for="menu in menus" class="space-y-2 pt-2">
            <ul class="pb-2">
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
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
      </a>

      
      
    </div>
  </div>
</aside>
<div class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90" :class="{ 'hidden': !useNavigation.sideBarMenuVisibility }" id="sidebarBackdrop"></div>

</template>

<script setup>
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, BanknotesIcon, CreditCardIcon, PaperClipIcon, UserGroupIcon, SquaresPlusIcon, MegaphoneIcon, TruckIcon, BriefcaseIcon, RectangleGroupIcon, ExclamationTriangleIcon, TableCellsIcon, PuzzlePieceIcon, QueueListIcon, HandThumbUpIcon, UsersIcon, CommandLineIcon, CircleStackIcon, BuildingOffice2Icon, ChatBubbleLeftRightIcon, SwatchIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon, CurrencyDollarIcon, HomeModernIcon, MapPinIcon, BuildingStorefrontIcon, KeyIcon, ClipboardDocumentListIcon, DocumentTextIcon, CubeIcon, RocketLaunchIcon, Square3Stack3DIcon, Cog8ToothIcon, FingerPrintIcon, BookOpenIcon, ListBulletIcon } from '@heroicons/vue/24/solid'
import { useNavigationStore } from '../../stores/navigation'
import { onMounted } from 'vue';
import { initDropdowns } from 'flowbite'

import DropDownMenu from './DropDownMenu.vue'
import BaseMenu  from './BaseMenu.vue'

const useNavigation = useNavigationStore()

onMounted(() => {
   useNavigation.hideSideBarMenu()
   initDropdowns()
})



const menus = [
   [
      
      {
         name: 'Chart of Accounts',
         icon: ListBulletIcon,
         routeName: 'Chart of Accounts'
      },
      {
         name: 'Journal Entry',
         icon: ClipboardDocumentListIcon,
         routeName: 'Home'
      }
         
   ],
   [{
      name: 'Reports',
      icon: Square3Stack3DIcon,
      submenu: [{
         name: 'Inventory Stocks',
         icon: QueueListIcon,
         routeName: 'Home'
      }]
   }],
   [{
         name: 'System',
         icon: Cog8ToothIcon,
         submenu: [{
               name: 'Companies',
               icon: BuildingOffice2Icon,
               routeName: 'Home'
            },
            {
               name: 'Users',
               icon: UsersIcon,
               routeName: 'Home'
            },
            {
               name: 'Roles',
               icon: CommandLineIcon,
               routeName: 'Home'
            },
            {
               name: 'Database Backups',
               icon: CircleStackIcon,
               routeName: 'Home'
            }


         ]
      },
   ]




]

</script>