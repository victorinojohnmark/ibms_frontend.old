<template>
    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing <span class="font-semibold text-gray-900 dark:text-white">{{ data.from }}-{{ data.to }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ data.total }}</span>
      </span>
      <ul class="inline-flex -space-x-px text-sm h-8">
        <li v-if="data.currentPage > 1">
          <a href="#" @click="changePage(data.currentPage - 1)"
            class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        <li v-for="link in data.links" :key="link.label">
          <a v-if="link.active" href="#" aria-current="page"
            class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{ link.label }}</a>
          <a v-else href="#" @click="changePage(getPageFromUrl(link.url))"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ link.label }}</a>
        </li>
        <li v-if="data.currentPage < data.lastPage">
          <a href="#" @click="changePage(data.currentPage + 1)"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  const props = defineProps({
    data: {
        type: Object,
        required: true
    }
  })
  
  
  function changePage(page) {
    // You can emit an event or perform any action here to update the page
    console.log('Changing page to', page);
  }
  
  function getPageFromUrl(url) {
    const params = new URLSearchParams(new URL(url).search);
    return Number(params.get('page'));
  }
  </script>