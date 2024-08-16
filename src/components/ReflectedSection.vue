<script setup>
import left_side from "@/assets/images/reflection-section/left-side-reflection.png";
import girl_left_side from "@/assets/images/reflection-section/girl-left-side-reflection.png";
import girl_right_side from "@/assets/images/reflection-section/girl-right-side-reflection.png";
import left_side_dev from "@/assets/images/reflection-section/left-side-dev-reflection.png";
import right_side from "@/assets/images/reflection-section/right-side-reflection.png";
import ShopNow from "./ShopNow.vue";
</script>

<template>
    <div class="relative flex justify-between mt-48">
        <!-- Left Side -->
        <div class="relative">
            <img :src="left_side" alt="left side reflection" class="absolute" style="min-width: 735px; min-height: 687px;" />
            <div class="relative mt-12 mr-6">
                <img :src="girl_left_side" alt="girl left side reflection" style="width: 424px; height: 564px; margin-left: -0.75rem; margin-top: -0.2rem;" />
                <div class="absolute flex -bottom-12 left-1 bg-white ml-6" style="width: 466px; height: 162px;">
                    <img :src="left_side_dev" class="p-2" alt="left side detail" />
                    <div class="flex flex-col justify-center ml-3">
                        <span class="text-black text-2xl font-bold">HURRY UP!</span>
                        <span class="text-gray-500 text-xl">In Consequat, Quam Id</span>
                        <span class="text-black text-3xl font-bold">Offer Of The Day</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Centered Text -->
        <div class="flex flex-col justify-center items-center mt-32 text-center ml-76">
            <span class="text-6xl text-[#FE8080] font-semibold">50% Off Sale</span>
            <span class="text-3xl text-gray-500 mt-6 mb-10">Maximus Lacinia Massa Non</span>
            <div class="relative">
                <ShopNow position="relative bottom-20 -left-2" font-size="text-5xl relative" img-style="relative left-64 bottom-8" :arrow="true" />
            </div>
        </div>

        <!-- Right Side -->
        <div class="relative" style="margin-right: 2.5rem;">
            <img :src="right_side" alt="right side reflection" class="absolute" style="min-width: 735px; min-height: 687px;" />
            <div class="relative mt-12">
                <img :src="girl_right_side" alt="girl right side reflection" style="width: 424px; height: 564px; margin-left: 17rem; margin-top: -1rem;" />
                <div class="absolute flex right-1 bg-white -mr-4" style="width: 466px; height: 162px; bottom: -3.75rem;">
                    <img :src="left_side_dev" class="p-2" alt="right side detail" />
                    <div class="flex flex-col justify-center mr-3">
                        <span class="text-black text-2xl font-bold">HURRY UP!</span>
                        <span class="text-gray-500 text-xl">In Consequat, Quam Id</span>
                        <span class="text-black text-3xl font-bold">Offer Of The Day</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
