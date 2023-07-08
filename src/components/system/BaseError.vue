<template>
    <div class="container">
        <h5 class=" font-semibold">Error occured</h5>
        <ul>
            <li v-for="error in systemStore.errors">{{ error[0] }}</li>
        </ul>
    </div>
</template>

<script setup>
import useSystemStore from '../../stores/system'

const systemStore = useSystemStore()
</script>