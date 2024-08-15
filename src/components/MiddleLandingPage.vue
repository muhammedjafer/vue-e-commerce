<script setup>
import { ref, onMounted, computed } from "vue";
import the_girl from "@/assets/images/the-girl.png";
import share_card from "@/assets/images/share_card.png";
import icon_heard from "@/assets/images/Icon-heart.png";

const sizes = ["S", "M", "L", "XL"];

const products = ref([]);

onMounted(async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=15");
        const data = await response.json();
        products.value = data.slice(0, 3); // Get only the first 3 products
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});

// Computed property to truncate the product title
const truncateTitle = (title) => {
    const maxLength = 30; // Maximum number of characters
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
};

</script>

<template>
    <div class="flex flex-col justify-center mt-40 text-center">
        <div class="text-6xl font-bold mb-12">Daily Flash Sale!</div>
        <div class="text-gray-500 text-3xl">
            Cras Pretium Suscipit Tellus Sit Amet Aliquet. Vestib <br />
            Maximus Lacinia Massa Non Porttitor.
        </div>
    </div>
    <div class="mt-12 flex justify-center items-center gap-5">
        <div v-for="product in products" :key="product.id" class="flex flex-col gap-4" style="width: 450px; height: 548px;">
            <img :src="product.image" alt="the girl test" class="block h-full object-fill border border-gray-200 rounded-sm"/>
            <div class="flex justify-between items-center text-black text-xl font-bold">
                <div>
                    {{ truncateTitle(product.title) }}
                </div>
                <div>${{ product.price }}</div>
            </div>
            <div class="flex justify-start items-center gap-1">
                <div v-for="size in sizes" :key="size">
                    <div>
                        <img :src="product.image" alt="alt message size" class="mb-4 object-contain" style="width: 40px; height: 40px" />
                        <span class="text-gray-500 w-10 border border-gray-200 block ms-1 text-center" :class="{ 'border border-red-500': size === 'M' }">{{ size }}</span>
                    </div>
                </div>
                <img :src="product.image" alt="alt message size" class="mb-10" style="width: 40px; height: 40px" />
            </div>
            <div>
                <hr class="h-0.5 w-full bg-black" />
            </div>
            <div class="text-gray-500 flex justify-between items-center">
                <div class="font-base font-bold">+Add To Cart</div>
                <div class="flex items-center justify-center gap-4">
                    <img :src="icon_heard" alt="icon heard" style="width: 28px; height: 28px" />
                    <img :src="share_card" alt="share card" style="width: 28px; height: 28px" />
                </div>
            </div>
        </div>
    </div>
</template>
