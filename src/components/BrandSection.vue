<script setup>
import { ref, onMounted } from "vue";

const loadImages = () => {
    const context = require.context("@/assets/images/brands", false, /\.(png|jpe?g|svg)$/);
    const images = {};

    context.keys().forEach((key) => {
        const imageName = key.replace("./", "");
        images[imageName] = context(key);
    });

    return images;
};

const images = ref({});

onMounted(() => {
    images.value = loadImages();
});
</script>

<template>
    <div class="flex justify-center items-center gap-24 my-36">
        <div v-for="(src, name) in images" :key="name">
            <img :src="src" :alt="name" />
        </div>
    </div>
</template>
