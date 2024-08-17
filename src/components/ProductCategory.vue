<script setup>
import { ref, onMounted } from 'vue';
import star from '@/assets/images/star.png';
import half_star from '@/assets/images/half-star.png';

const products = ref([]);

const headers = ['Hot Products', 'Hot Products', 'Men Products', 'New Products'];

onMounted(async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=12");
        const data = await response.json();
        products.value = data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});

const getStarIcons = (rate) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5; 

    return {
        fullStars: Array(fullStars).fill(star),
        halfStar: hasHalfStar ? half_star : null
    };
};

const truncateTitle = (title) => {
    const maxLength = 10; // Maximum number of characters
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
};
</script>

<template>
    <div class="flex flex-col text-center mt-56">
        <div class="grid grid-cols-4 grid-flow-row gap-8 justify-center mx-64 justify-items-center">
            <div v-for="header in headers" :key="header" class="text-2xl font-semibold justify-self-start">
                <span>{{ header }}</span>
            </div>
            <div v-for="product in products" :key="product.id" class="row-span-1 justify-items-center mt-5" style="width: 304px;">
                <div class="flex gap-6">
                    <div class="border border-gray-200">
                        <RouterLink :to="'/product-details/' + product.id">
                            <img :src="product.image" class="object-contain" :alt="product.title" style="width: 110px; height: 144px;">
                        </RouterLink>
                    </div>
                    <div class="flex flex-col justify-start items-start" style="gap: 15px;">
                        <span class="text-xl text-left font-semibold">{{ truncateTitle(product.title) }}</span>
                        <span class="text-xl text-gray-500">Quam</span>
                        <div class="flex flex-start">
                            <div v-for="(icon, index) in getStarIcons(product.rating.rate).fullStars" :key="index">
                                <img :src="icon" :alt="`star-${product.id}-${index}`" class="w-5 h-5">
                            </div>
                            <div v-if="getStarIcons(product.rating.rate).halfStar">
                                <img :src="getStarIcons(product.rating.rate).halfStar" :alt="`half-star-${product.id}`" class="w-5 h-5">
                            </div>
                        </div>
                        <span class="text-2xl font-semibold">${{ product.price }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>