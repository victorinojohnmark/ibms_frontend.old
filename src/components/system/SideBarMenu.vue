<template>
    <aside id="sidebar" class="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col lg:w-64 w-full transition-width duration-75" :class="{ 'hidden': !useNavigation.sideBarMenuVisibility }" aria-label="Sidebar">
         <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class="flex-1 flex flex-col pt-3 pb-4 overflow-y-auto">
               <div class="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul class="pb-2">
                     <li class="my-1">
                        <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="w-full text-sm font-normal rounded-lg hover:bg-gray-100 focus:bg-gray-100 flex flex-col items-center justify-start p-3 group">
                           <div class="flex w-full group-focus:bg-gray-100">
                              <span class="text-gray-500 group-hover:text-gray-700 font-semibold whitespace-nowrap">
                                 <MapPinIcon class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600"/>
                                 Locations
                              </span>
                           </div>  
                        </RouterLink>
                     </li>

                     <li class="my-1">
                        <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="w-full text-sm font-normal rounded-lg hover:bg-gray-100 focus:bg-gray-100 flex flex-col items-center justify-start p-3 group">
                           <div class="flex w-full group-focus:bg-gray-100">
                              <span class="text-gray-500 group-hover:text-gray-700 font-semibold whitespace-nowrap">
                                 <HomeModernIcon class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600"/>
                                 Housing Units
                              </span>
                           </div>  
                        </RouterLink>
                     </li>

                     <li class="my-1">
                        <DropDownMenu name="Marketing">
                           <template v-slot:icon>
                              <KeyIcon name="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600" />
                           </template>
                           <ul class="w-full block mt-2 text-left">
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left block text-gray-500 font-semibold hover:text-gray-700">
                                    <ChatBubbleLeftRightIcon class="w-6 h-6 inline mr-3" />
                                    <span>Brokers</span>
                                 </RouterLink>
                              </li>
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <MegaphoneIcon class="w-6 h-6 inline mr-3" />
                                    <span>Commissions</span>
                                 </RouterLink>
                              </li>
                           </ul>
                        </DropDownMenu>
                     </li>

                     <li class="my-1">
                        <DropDownMenu name="Credit & Collection">
                           <template v-slot:icon>
                              <CurrencyDollarIcon name="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600" />
                           </template>
                           <ul class="w-full block mt-2 text-left">
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left block text-gray-500 font-semibold hover:text-gray-700">
                                    <BanknotesIcon class="w-6 h-6 inline mr-3" />
                                    <span>Payments</span>
                                 </RouterLink>
                              </li>
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <CreditCardIcon class="w-6 h-6 inline mr-3" />
                                    <span>Loan Takeouts</span>
                                 </RouterLink>
                              </li>
                           </ul>
                        </DropDownMenu>
                     </li>


                     <li class="my-1">
                        <DropDownMenu name="Contracts">
                           <template v-slot:icon>
                              <DocumentTextIcon name="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600" />
                           </template>
                           <ul class="w-full block mt-2 text-left">
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700" >
                                    <UserGroupIcon class="w-6 h-6 inline mr-3" />
                                    <span>Clients</span>
                                 </RouterLink>
                              </li>
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <PaperClipIcon class="w-6 h-6 inline mr-3" />
                                    <span>Accounts</span>
                                 </RouterLink>
                              </li>

                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <ClipboardDocumentListIcon class="w-6 h-6 inline mr-3" />
                                    <span>Documentations</span>
                                 </RouterLink>
                              </li>
                           </ul>
                        </DropDownMenu>
                     </li>

                     <li class="my-1">
                        <DropDownMenu name="Purchasing">
                           <template v-slot:icon>
                              <ShoppingCartIcon name="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600" />
                           </template>
                           <ul class="w-full block mt-2 text-left">
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <BuildingStorefrontIcon class="w-6 h-6 inline mr-3" />
                                    <span>Suppliers</span>
                                 </RouterLink>
                              </li>

                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <ClipboardDocumentIcon class="w-6 h-6 inline mr-3" />
                                    <span>Purchase Request</span>
                                 </RouterLink>
                              </li>
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <ClipboardDocumentCheckIcon class="w-6 h-6 inline mr-3" />
                                    <span>Purchase Order</span>
                                 </RouterLink>
                              </li>
                           </ul>
                        </DropDownMenu>
                     </li>

                     <li class="my-1">
                        <DropDownMenu name="Warehouse">
                           <template v-slot:icon>
                              <CubeIcon name="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600" />
                           </template>
                           <ul class="w-full block mt-2 text-left">
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <SquaresPlusIcon class="w-6 h-6 inline mr-3" />
                                    <span>Materials/Items</span>
                                 </RouterLink>
                              </li>

                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <TruckIcon class="w-6 h-6 inline mr-3" />
                                    <span>Deliveries</span>
                                 </RouterLink>
                              </li>
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <RectangleGroupIcon class="w-6 h-6 inline mr-3" />
                                    <span>Releases</span>
                                 </RouterLink>
                              </li>
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <ExclamationTriangleIcon class="w-6 h-6 inline mr-3" />
                                    <span>Incident Report</span>
                                 </RouterLink>
                              </li>
                           </ul>
                        </DropDownMenu>
                     </li>

                     <li class="my-1">
                        <DropDownMenu name="Construction">
                           <template v-slot:icon>
                              <RocketLaunchIcon name="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600" />
                           </template>
                           <ul class="w-full block mt-2 text-left">
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <BriefcaseIcon class="w-6 h-6 inline mr-3" />
                                    <span>Contractors</span>
                                 </RouterLink>
                              </li>

                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <TableCellsIcon class="w-6 h-6 inline mr-3" />
                                    <span>Bill of Materials</span>
                                 </RouterLink>
                              </li>
                              <li class="py-2">
                                 <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <PuzzlePieceIcon class="w-6 h-6 inline mr-3" />
                                    <span>House Construction</span>
                                 </RouterLink>
                              </li>
                              
                           </ul>
                        </DropDownMenu>
                     </li>


                  </ul>
                  <div class="space-y-2 pt-2">
                     <ul class="pb-2">
                        <li class="my-1">
                           <DropDownMenu name="Reports">
                              <template v-slot:icon>
                                 <Square3Stack3DIcon name="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600" />
                              </template>
                              <ul class="w-full block mt-2 text-left">
                                 <li class="py-2">
                                    <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left block text-gray-500 font-semibold hover:text-gray-700">
                                       <QueueListIcon class="w-6 h-6 inline mr-3" />
                                       <span>Inventory Stocks</span>
                                    </RouterLink>
                                 </li>
                                 <li class="py-2">
                                    <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                       <HandThumbUpIcon class="w-6 h-6 inline mr-3" />
                                       <span>Account Receivables</span>
                                    </RouterLink>
                                 </li>
                              </ul>
                           </DropDownMenu>
                        </li>

                     </ul>
                  </div>

                  <div class="space-y-2 pt-2">
                     <ul class="pb-2">
                        <li class="my-1">
                           <DropDownMenu name="System">
                              <template v-slot:icon>
                                 <Cog8ToothIcon name="icon" class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600" />
                              </template>
                              <ul class="w-full block mt-2 text-left">
                                 <li class="py-2">
                                    <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left block text-gray-500 font-semibold hover:text-gray-700">
                                       <BuildingOffice2Icon class="w-6 h-6 inline mr-3" />
                                       <span>Companies</span>
                                    </RouterLink>
                                 </li>
                                 <li class="py-2">
                                    <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left block text-gray-500 font-semibold hover:text-gray-700">
                                       <UsersIcon class="w-6 h-6 inline mr-3" />
                                       <span>Users</span>
                                    </RouterLink>
                                 </li>
                                 <li class="py-2">
                                    <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                       <CommandLineIcon class="w-6 h-6 inline mr-3" />
                                       <span>Roles</span>
                                    </RouterLink>
                                 </li>
                                 <li class="py-2">
                                    <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                       <CircleStackIcon class="w-6 h-6 inline mr-3" />
                                       <span>Database Backups</span>
                                    </RouterLink>
                                 </li>
                              </ul>
                           </DropDownMenu>
                        </li>

                        <li class="my-1">
                           <RouterLink @click="useNavigation.hideSideBarMenu()" :to="{ name: 'Home' }" class="w-full text-sm font-normal rounded-lg hover:bg-gray-100 focus:bg-gray-100 flex flex-col items-center justify-start p-3 group">
                              <div class="flex w-full group-focus:bg-gray-100">
                                 <span class="text-gray-500 group-hover:text-gray-700 font-semibold whitespace-nowrap">
                                    <FingerPrintIcon class="w-6 h-6 inline mr-2 text-gray-500 group-hover:text-green-600"/>
                                    Activity Logs
                                 </span>
                              </div>  
                           </RouterLink>
                        </li>

                     </ul>
                  </div>
               </div>
            </div>
            <small class="w-full items-center font-semibold text-xs lg:text-left text-center text-gray-500 bg-gray-100 p-4">
                <!-- IT Department • Created with <HeartIcon class="w-4 h-4 inline"/> -->
                 Z-Well/Lyf Homes • IT Department  
            </small>
         </div>
      </aside>
      <div class="bg-gray-900 opacity-50 fixed inset-0 z-10" :class="{ 'hidden': !useNavigation.sideBarMenuVisibility }" @click="useNavigation.toggleSideBarMenu()" id="sidebarBackdrop"></div>
</template>

<script setup>
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, BanknotesIcon, CreditCardIcon, PaperClipIcon, UserGroupIcon, SquaresPlusIcon, MegaphoneIcon, TruckIcon, BriefcaseIcon, RectangleGroupIcon, ExclamationTriangleIcon, TableCellsIcon, PuzzlePieceIcon, QueueListIcon, HandThumbUpIcon, UsersIcon, CommandLineIcon, CircleStackIcon, BuildingOffice2Icon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon, CurrencyDollarIcon, HomeModernIcon, MapPinIcon, BuildingStorefrontIcon, KeyIcon, ClipboardDocumentListIcon, DocumentTextIcon, CubeIcon, RocketLaunchIcon, Square3Stack3DIcon, Cog8ToothIcon, FingerPrintIcon } from '@heroicons/vue/24/solid'
import { useNavigationStore } from '../../stores/navigation'
import { onMounted } from 'vue';

import DropDownMenu from './DropDownMenu.vue'

const useNavigation = useNavigationStore()

onMounted(() => {
   useNavigation.hideSideBarMenu()
})

</script>