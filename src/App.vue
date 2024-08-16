<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="background-div">
    <Navbar />
    <RouterView />
    <Footer />
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