<script setup>
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';

import { RouterView } from 'vue-router';
</script>

<template>
  <div class="background-div">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped>
.background-div {
    background-image: url('@/assets/images/imge_background.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 0;
}
</style>