<script setup>
import right_arrow from '@/assets/images/right-arrow.png';

const props = defineProps({
    fontSize: {
        type: String,
        default: "text-5xl",
    },
    position: {
        type: String,
        default: "absolute -left-1 -top-2",
    },
    textColor: {
        type: String,
        default: "",
    },
    arrow: {
        type: Boolean,
        default: true,
    },
    imgStyle: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <h4 :class="`underline z-10 ${fontSize} ${textColor} me-2`">Shop Now</h4>
    <img v-if="arrow" :src="right_arrow" :class="`${imgStyle}`" alt="the right arrow" style="width: 37px; height: 19px;">
    <div :class="`w-16 bg-[#FE8080] ${position}`" style="height: 4.5rem"></div>
</template>
