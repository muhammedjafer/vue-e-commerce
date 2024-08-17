<script setup>
import { ref, onMounted } from 'vue';

const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=15');
    const data = await response.json();
    products.value = data.slice(0, 3); // Get only the first 3 products
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<template>
    <div class="z-50">
        <div class="text-gray-500 text-4xl font-semibold mb-8">
            Deals of the day
        </div>
        <div class="z-50 flex flex-row gap-4 mt-6 me-12">
            <div v-for="product in products" :key="product.id" class="bg-gray-100 relative" style="width: 331px; height: 391px;">
                <RouterLink :to="'/product-details/' + product.id">
                    <img :src="product.image" alt="the girl test" class="h-full w-full border border-gray-200 rounded-sm">
                </RouterLink>
                <div class="absolute flex justify-between bottom-0 bg-black
                bg-opacity-40 py-2 px-4 w-full text-center font-semibold">
                    <div class="text-white flex items-center">
                        {{ product.title }}
                    </div>
                    <div>
                        <div class="text-gray-300 line-through">
                            ${{ product.price }}
                        </div>
                        <div class="text-white">
                            $75.00
                        </div>
                    </div>
                </div>
                <div class="absolute top-4 left-7 bg-[#FE8080] h-7 flex justify-center items-center text-white font-semibold" style="width: 73px;">-25%</div>
            </div>
        </div>
    </div>
</template>