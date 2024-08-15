<script setup>
import share_card from "@/assets/images/share_card.png";
import icon_heard from "@/assets/images/Icon-heart.png";

const props = defineProps({
    width: String,
    height: String,
    product: Object,
    sizes: Array,
    styleIcons: {
        type: String,
        default: ''
    },
    styleSizes: {
        type: String,
        default: ''
    },
});

// Computed property to truncate the product title
const truncateTitle = (title) => {
    const maxLength = 20; // Maximum number of characters
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
};
</script>

<template>
    <img :src="product.image" alt="the girl test" class="block h-full border border-gray-200 rounded-sm" :style="{ width: width, height: height }"  />
    <div class="flex justify-between items-center text-black text-xl font-bold">
        <div>
            {{ truncateTitle(product.title) }}
        </div>
        <div>${{ product.price }}</div>
    </div>
    <div :class="`flex justify-start items-center gap-1 ${styleSizes}`">
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
    <div :class="`text-gray-500 flex justify-between items-center ${styleIcons}`">
        <div class="font-base font-bold">+Add To Cart</div>
        <div class="flex items-center justify-center gap-4">
            <img :src="icon_heard" alt="icon heard" style="width: 28px; height: 28px" />
            <img :src="share_card" alt="share card" style="width: 28px; height: 28px" />
        </div>
    </div>
</template>
