<script setup>
import { ref, onMounted, computed } from "vue";
import star from "@/assets/images/star.png";
import half_star from "@/assets/images/half-star.png";

const products = ref([]);

onMounted(async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=2");
        const data = await response.json();
        products.value = data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});

const truncateSentence = (sentence, type) => {
    const maxLength = type == "title" ? 30 : 100; // Maximum number of characters
    return sentence.length > maxLength ? `${sentence.slice(0, maxLength)}...` : sentence;
};

const getStarIcons = (rate) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;

    return {
        fullStars: Array(fullStars).fill(star),
        halfStar: hasHalfStar ? half_star : null,
    };
};
</script>

<template>
    <div class="my-40">
        <div class="flex flex-col justify-center items-center">
            <span class="text-6.5xl text-black font-semibold pb-10">Don't Miss The Last Deals</span>
            <span class="text-4xl text-gray-500 text-center leading-snug"
                >Cras Pretium Suscipit Tellus Sit Amet Aliquet. Vestib Maximus <br />
                Lacinia Massa Non Porttitor.</span
            >
        </div>
        <div class="mt-24 flex justify-center gap-16">
            <div v-for="product in products">
                <div class="border border-gray-200 p-6 flex gap-4" style="width: 664px; height: 423px">
                    <div class="relative">
                        <img :src="product.image" alt="product image" class="object-contain border border-gray-200" style="width: 252px; height: 381px" />
                        <div class="absolute top-4 left-4 w-12 h-6 text-gray-500 bg-white border border-gray-200 text-center">26%</div>
                    </div>
                    <div class="flex flex-col items-start justify-start">
                        <span class="text-xl text-black text-left">{{ truncateSentence(product.title, "title") }}</span>
                        <span class="text-xl text-black text-left font-bold pt-2">$29.90 - $39.90</span>
                        <div class="flex flex-start items-center py-6">
                            <div v-for="(icon, index) in getStarIcons(product.rating.rate).fullStars" :key="index">
                                <img :src="icon" :alt="`star-${product.id}-${index}`" class="w-3 h-3" />
                            </div>
                            <div v-if="getStarIcons(product.rating.rate).halfStar">
                                <img :src="getStarIcons(product.rating.rate).halfStar" :alt="`half-star-${product.id}`" class="w-3 h-3" />
                            </div>
                            <div class="pl-2 text-gray-500">{{ product.rating.count }} reviews</div>
                        </div>
                        <div class="max-w-80 text-lg">{{ truncateSentence(product.description, "desc") }}</div>
                        <div class="my-4">
                            <span class="text-black text-xl">Offer end in:</span>
                            <div class="flex items-center gap-2 my-2">
                                <div v-for="index in 4" :key="index" class="flex items-center gap-2">
                                    <div class="w-10 h-11 bg-gray-200 text-center flex justify-center items-center text-xl">00</div>
                                    <p v-if="index < 4">:</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 text-lg text-gray-500">
                            <span>Available: 8</span>
                            <span>Sold: <span class="text-[#FE8080]">8</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
