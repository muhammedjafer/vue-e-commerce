<script setup>
import { ref, onMounted, computed } from "vue";
import the_girl from "@/assets/images/the-girl.png";
import ProductList from "./ProductList.vue";
import HeaderSection from "./HeaderSection.vue";

const sizes = ["S", "M", "L", "XL"];

const products = ref([]);

onMounted(async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=3");
        const data = await response.json();
        products.value = data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});
</script>

<template>
    <div class="flex flex-col justify-center mt-40 text-center">
        <HeaderSection header="Daily Flash Sale!" description="Cras Pretium Suscipit Tellus Sit Amet Aliquet. Vestib" in-description="Maximus Lacinia Massa Non Porttitor." />
    </div>
    <div class="mt-12 flex justify-center items-center gap-5">
        <div v-for="product in products" :key="product.id" class="flex flex-col gap-4">
            <ProductList width="450px" height="548px" :product="product" :sizes="sizes" />
        </div>
    </div>
</template>
