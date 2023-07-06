<template>
    <aside id="sidebar" class="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col lg:w-64 w-full transition-width duration-75" :class="{ 'hidden': !useNavigation.sideBarMenuVisibility }" aria-label="Sidebar">
         <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class="flex-1 flex flex-col pt-3 pb-4 overflow-y-auto">
               <div class="flex-1 px-3 bg-white divide-y space-y-1">

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
            <small class="w-full items-center font-semibold text-xs text-center text-gray-500 bg-gray-100 p-4">
                <!-- IT Department • Created with <HeartIcon class="w-4 h-4 inline"/> -->
                 Z-Well/Lyf Homes • IT Department  
            </small>
         </div>
      </aside>
      <div class="bg-gray-900 opacity-50 fixed inset-0 z-10" :class="{ 'hidden': !useNavigation.sideBarMenuVisibility }" @click="useNavigation.toggleSideBarMenu()" id="sidebarBackdrop"></div>
</template>

<script setup>
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, BanknotesIcon, CreditCardIcon, PaperClipIcon, UserGroupIcon, SquaresPlusIcon, MegaphoneIcon, TruckIcon, BriefcaseIcon, RectangleGroupIcon, ExclamationTriangleIcon, TableCellsIcon, PuzzlePieceIcon, QueueListIcon, HandThumbUpIcon, UsersIcon, CommandLineIcon, CircleStackIcon, BuildingOffice2Icon, ChatBubbleLeftRightIcon, SwatchIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon, CurrencyDollarIcon, HomeModernIcon, MapPinIcon, BuildingStorefrontIcon, KeyIcon, ClipboardDocumentListIcon, DocumentTextIcon, CubeIcon, RocketLaunchIcon, Square3Stack3DIcon, Cog8ToothIcon, FingerPrintIcon, BookOpenIcon, ListBulletIcon } from '@heroicons/vue/24/solid'
import { useNavigationStore } from '../../stores/navigation'
import { onMounted } from 'vue';

import DropDownMenu from './DropDownMenu.vue'
import BaseMenu  from './BaseMenu.vue'

const useNavigation = useNavigationStore()

onMounted(() => {
   useNavigation.hideSideBarMenu()
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
         
      
      // {
      //    name: 'Location',
      //    icon: MapPinIcon,
      //    routeName: 'Home'
      // },
      // {
      //    name: 'Housing Units',
      //    icon: HomeModernIcon,
      //    routeName: 'Home'
      // },
      // {
      //    name: 'Marketing',
      //    icon: KeyIcon,
      //    submenu: [{
      //          name: 'Broker',
      //          icon: ChatBubbleLeftRightIcon,
      //          routeName: 'Home'
      //       },
      //       {
      //          name: 'Commissions',
      //          icon: MegaphoneIcon,
      //          routeName: 'Dashboard'
      //       },

      //    ]
      // },
      // {
      //    name: 'Credit & Collection',
      //    icon: CurrencyDollarIcon,
      //    submenu: [{
      //          name: 'Payment',
      //          icon: BanknotesIcon,
      //          routeName: 'Home'
      //       },
      //       {
      //          name: 'Loan Takeouts',
      //          icon: CreditCardIcon,
      //          routeName: 'Dashboard'
      //       },

      //    ]
      // },
      // {
      //    name: 'Contracts',
      //    icon: DocumentTextIcon,
      //    submenu: [{
      //          name: 'Clients',
      //          icon: UserGroupIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'Accounts',
      //          icon: PaperClipIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'Documentations',
      //          icon: ClipboardDocumentListIcon,
      //          routeName: 'Dashboard'
      //       },

      //    ]
      // },
      // {
      //    name: 'Purchasing',
      //    icon: ShoppingCartIcon,
      //    submenu: [{
      //          name: 'Suppliers',
      //          icon: BuildingStorefrontIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'Purchase Request',
      //          icon: ClipboardDocumentIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'Purchase Order',
      //          icon: ClipboardDocumentCheckIcon,
      //          routeName: 'Dashboard'
      //       },

      //    ]
      // },
      // {
      //    name: 'Warehouse',
      //    icon: CubeIcon,
      //    submenu: [{
      //          name: 'Materials/Items',
      //          icon: SquaresPlusIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'Deliveries',
      //          icon: TruckIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'Releases',
      //          icon: RectangleGroupIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'Incident Report',
      //          icon: ExclamationTriangleIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'Item to Warehouse',
      //          icon: SwatchIcon,
      //          routeName: 'Dashboard'
      //       },


      //    ]
      // },
      // {
      //    name: 'Construction',
      //    icon: RocketLaunchIcon,
      //    submenu: [{
      //          name: 'Contractors',
      //          icon: BriefcaseIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'Bill of Materials',
      //          icon: TableCellsIcon,
      //          routeName: 'Dashboard'
      //       },
      //       {
      //          name: 'House Construction',
      //          icon: PuzzlePieceIcon,
      //          routeName: 'Dashboard'
      //       }
      //    ]
      // }
   ],
   [{
      name: 'Reports',
      icon: Square3Stack3DIcon,
      submenu: [{
         name: 'Inventory Stocks',
         icon: QueueListIcon,
         routeName: 'Home'
      }]
   }, ],
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
      {
         name: 'Activity Logs',
         icon: FingerPrintIcon,
         routeName: 'Home'
      },
   ]




]

</script>