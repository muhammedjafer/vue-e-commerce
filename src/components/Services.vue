<script setup>
import { ref } from "vue";

const images = [require("@/assets/images/services/1.free-shipping-57-48.png"), require("@/assets/images/services/2.money-guarantee-50-47.png"), require("@/assets/images/services/3.online-support-49-48.png"), require("@/assets/images/services/4.flexible-payment-49-49.png")];

const services = ref([
    {
        image: images[0],
        title: "Free Shipping",
        desc: "Free Shipping For Orders Over $130",
    },
    {
        image: images[1],
        title: "Money Guarantee",
        desc: "Within 30 Days For An Exchange.",
    },
    {
        image: images[2],
        title: "Online Support",
        desc: "Our Team On Hand Seven Days A Week.",
    },
    {
        image: images[3],
        title: "Flexible Payment",
        desc: "Pay With Multiple Credit Cards.",
    },
]);
</script>

<template>
    <div class="flex justify-center items-center gap-28 text-gray-500 mb-28">
        <div v-for="service in services" :key="service.title" class="text-center flex flex-col justify-center items-center">
            <img :src="service.image" :alt="service.title" /><br />
            <div class="flex flex-col max-w-68 pb-3">
                <span class="text-2xl text-black font-semibold mb-3">{{ service.title }}</span>
                <span class="text-xl">{{ service.desc }}</span>
            </div>
        </div>
    </div>
</template>
