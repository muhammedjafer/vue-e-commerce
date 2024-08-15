<script setup>
import { ref, onMounted, computed } from "vue";
import ProductList from "./ProductList.vue";
import HeaderSection from "./HeaderSection.vue";

const sizes = ["S", "M", "L", "XL"];

const products = ref([]);

onMounted(async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=8");
        const data = await response.json();
        products.value = data; // Get only the first 3 products
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});
</script>

<template>
    <div class="flex flex-col justify-center text-center">
        <div class="flex flex-col justify-center text-center">
            <HeaderSection header="Popular Picks in Clonto!" description="Cras Pretium Suscipit Tellus Sit Amet Aliquet. Vestib" in-description="Maximus Lacinia Massa Non Porttitor." />
        </div>
        <div class="flex justify-center items-baseline gap-3 text-gray-500 text-3xl mt-12 mb-16">
            <span class="text-[#FE8080]">Special</span>
            <hr class="h-0.5 w-24 bg-gray-500" />
            <span>Newest</span>
            <hr class="h-0.5 w-24 bg-gray-500" />
            <span>Featured</span>
            <hr class="h-0.5 w-24 bg-gray-500" />
            <span>Treading</span>
        </div>
        <div class="mt-12 grid grid-rows-2 grid-flow-col gap-6 justify-center items-end">
            <div v-for="(product, index) in products" :key="product.id" class="row-span-1" :class="{ 'mt-12': index >= 3 }">
                <ProductList width="330px" height="402px" :product="product" :sizes="sizes" style-icons="pt-5" style-sizes="pb-5" />
            </div>
        </div>
    </div>
</template>
