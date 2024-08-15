<script setup>
import the_girl from "@/assets/images/the-girl.png";
import first_image from "@/assets/images/middle_landing_page_two/first.png";
import second_image from "@/assets/images/middle_landing_page_two/second.png";
import third_image from "@/assets/images/middle_landing_page_two/third.png";
import forth_image from "@/assets/images/middle_landing_page_two/forth.png";
import fifth_image from "@/assets/images/middle_landing_page_two/fifth.png";
</script>

<template>
    <div class="grid grid-rows-2 grid-flow-col gap-6 justify-center items-center py-32">
        <div class="row-span-1 relative">
            <img :src="first_image" alt="" style="width: 450px; height: 245px" />
            <span class="absolute bottom-6 left-8 text-3xl font-semibold">MODERN</span>
        </div>
        <div class="row-span-1 relative">
            <img :src="second_image" alt="" style="width: 450px; height: 245px" />
            <span class="absolute bottom-6 left-8 text-3xl font-semibold">NEWEST</span>
        </div>
        <div class="row-span-2 relative">
            <img :src="third_image" class="filter brightness-75" alt="" style="width: 450px; height: 520px" />
            <div class="absolute top-6 w-full flex flex-col items-center">
                <span class="text-4xl text-white font-bold">
                    25%
                    <span class="text-3xl text-white"> OFF </span>
                </span>
                <span class="text-3xl text-white font-semibold">All Modern Collections</span>

                <div class="flex items-center relative ml-2 mt-80">
                    <h4 class="underline z-10 text-white text-5xl me-2">Shop Now</h4>
                    <div class="w-16 bg-[#FE8080] absolute -left-3 -top-2" style="height: 4.5rem"></div>
                </div>
            </div>
        </div>
        <div class="row-span-1 relative">
            <img :src="forth_image" alt="" style="width: 450px; height: 245px" />
            <span class="absolute bottom-6 left-8 text-3xl font-semibold">SALE</span>
        </div>
        <div class="row-span-1 relative">
            <img :src="fifth_image" alt="" style="width: 450px; height: 245px" />
            <span class="absolute bottom-6 left-8 text-3xl font-semibold">SUMMER</span>
        </div>
    </div>
</template>
