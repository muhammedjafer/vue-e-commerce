<script setup>
import { ref, onMounted, computed } from "vue";
import ProductList from "./ProductList.vue";
import HeaderSection from "./HeaderSection.vue";

const sizes = ["S", "M", "L", "XL"];

const products = ref([]);

onMounted(async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=4");
        const data = await response.json();
        products.value = data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});
</script>

<template>
    <div class="flex flex-col justify-center text-center">
        <div class="flex flex-col justify-center text-center">
            <div class="text-6xl font-bold mb-12">Daily Flash Sale!</div>
        </div>
        <div class="mt-12 grid grid-rows-1 grid-flow-col gap-6 justify-center items-end mb-28">
            <div v-for="product in products" :key="product.id" class="row-span-1">
                <ProductList width="330px" height="402px" :product="product" :sizes="sizes" style-icons="pt-5" style-sizes="pb-5" />
            </div>
        </div>
    </div>
</template>
