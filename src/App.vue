<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router';

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

// Reactive property to control the background image state
const backgroundImageNone = ref(false);

// Get the current route
const route = useRoute();

// Watch for changes in the route
watch(route, (to) => {
  if (to.name === 'product-details') {
      console.log('hello');
        backgroundImageNone.value = true;
    } else {
        backgroundImageNone.value = false;
    }
});
</script>

<template>
  <div class="background-div" :class="{ 'bg-none': backgroundImageNone }">
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

.bg-none {
    background-image: none;
}

</style>