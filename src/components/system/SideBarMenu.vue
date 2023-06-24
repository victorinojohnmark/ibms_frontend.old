<template>
    <aside id="sidebar" class="fixed hidden z-20 h-full top-0 left-0 pt-14 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
         <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
               <div class="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul class="pb-2">
                     <li>
                        <a href="#" class="w-full text-sm font-normal rounded-lg hover:bg-gray-100 focus:bg-gray-100 flex flex-col items-center justify-start p-4 py-3 group ">
                           <div class="flex w-full group-focus:bg-gray-100">
                              <span class="text-gray-500 group-hover:text-gray-700 font-semibold whitespace-nowrap">
                                 <GlobeAsiaAustraliaIcon class="w-6 h-6 inline mr-2"/>
                                 Dashboard
                              </span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <button class="w-full text-sm font-normal rounded-lg hover:bg-gray-100 focus:bg-gray-100 flex flex-col items-center justify-start p-4 py-3 group ">
                           <div class="flex w-full group-focus:bg-gray-100">
                              <span class="text-gray-500 group-hover:text-gray-700 font-semibold whitespace-nowrap">
                                 <ShoppingCartIcon class="w-6 h-6 inline mr-2"/>
                                 Purchasing
                              </span>
                              <!-- <ChevronDownIcon class="text-gray-500 ml-auto w-6 h-6" /> -->
                           </div>
                           <ul class="w-full hidden group-focus:block mt-2 text-left">
                              <li class="py-2">
                                 <a href="#" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <ClipboardDocumentIcon class="w-6 h-6 inline mr-3" />

                                    <span>Purchase Request</span>
                                 </a>
                              </li>
                              <li class="py-2">
                                 <a href="#" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <ClipboardDocumentCheckIcon class="w-6 h-6 inline mr-3" />

                                    <span>Purchase Order</span>
                                 </a>
                              </li>
                           </ul>
                        </button>
                     </li>

                     <li>
                        <button class="w-full text-sm font-normal rounded-lg hover:bg-gray-100 focus:bg-gray-100 flex flex-col items-center justify-start p-4 py-3 group ">
                           <div class="flex w-full group-focus:bg-gray-100">
                              <span class="text-gray-500 group-hover:text-gray-700 font-semibold whitespace-nowrap">
                                 <CurrencyDollarIcon class="w-6 h-6 inline mr-2"/>
                                 Credit & Collection
                              </span>
                              <!-- <ChevronDownIcon class="text-gray-500 ml-auto w-6 h-6" /> -->
                           </div>
                           <ul class="w-full hidden group-focus:block mt-2 text-left">
                              <li class="py-2">
                                 <a href="#" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <BanknotesIcon class="w-6 h-6 inline mr-3" />
                                    <span>Payments</span>
                                 </a>
                              </li>
                              <li class="py-2">
                                 <a href="#" class="text-left text-gray-500 font-semibold hover:text-gray-700">
                                    <CreditCardIcon class="w-6 h-6 inline mr-3" />
                                    <span>Loan Takeouts</span>
                                 </a>
                              </li>
                           </ul>
                        </button>
                     </li>

                     <li>
                        <a href="#" class="w-full text-sm font-normal rounded-lg hover:bg-gray-100 focus:bg-gray-100 flex flex-col items-center justify-start p-4 py-3 group ">
                           <div class="flex w-full group-focus:bg-gray-100">
                              <span class="text-gray-500 group-hover:text-gray-700 font-semibold whitespace-nowrap">
                                 <ShoppingCartIcon class="w-6 h-6 inline mr-3"/>
                                 Purchasing
                              </span>
                           </div>
                        </a>
                     </li>

                  </ul>
                  <!-- <div class="space-y-2 pt-2">
                     <a href="#" class="text-sm text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                        <svg class="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                           <path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
                        </svg>
                        <span class="ml-4">Upgrade to Pro</span>
                     </a>
                     <a href="#" target="_blank" class="text-sm text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                           <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="ml-3">Documentation</span>
                     </a>
                     <a href="#" target="_blank" class="text-sm text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                        </svg>
                        <span class="ml-3">Components</span>
                     </a>
                     <a href="#" target="_blank" class="text-sm text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="ml-3">Help</span>
                     </a>
                  </div> -->
               </div>
            </div>
            <small class="w-full text-xs text-center text-gray-400 bg-gray-200 p-4">
                IT Department • Created with <HeartIcon class="w-4 h-4 inline"/>
            </small>
         </div>
      </aside>
      <div class="bg-gray-90 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
</template>

<script setup>
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, ChevronDownIcon, BanknotesIcon, CreditCardIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon, GlobeAsiaAustraliaIcon, CurrencyDollarIcon, HeartIcon } from '@heroicons/vue/24/solid'


</script>