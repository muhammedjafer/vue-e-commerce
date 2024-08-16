<script setup>
import ArrowDownIcon from "./svg_icons/ArrowDownIcon.vue";
import InstagramIcon from "./svg_icons/InstagramIcon.vue";
import logo from "@/assets/images/logo_ecommerce.png";
import search from "@/assets/images/search-icon.png";
import orderTracking from "@/assets/images/order-tracking.png";
</script>

<template>
    <div class="flex justify-center items-center pt-4" style="gap: 27rem;">
        <div class="flex gap-8">
            <div class="flex items-center gap-1 text-gray-500">
                <InstagramIcon />
                3.1M Followers
                <ArrowDownIcon />
            </div>
            <div class="text-gray-500">Free Shipping for all orders over $199. <span class="text-orange-400">Click and Shop Now.</span></div>
        </div>
        <div class="text-gray-500 flex justify-center gap-6">
            <div class="flex items-center gap-1">
                <img :src="orderTracking" alt="order tracking" class="w-4 h-4">
                Order Tracking
            </div>
            <div class="flex items-center gap-1">
                English
                <ArrowDownIcon />
            </div>
            <div class="flex items-center gap-1">
                USD
                <ArrowDownIcon />
            </div>
        </div>
    </div>
    <div class="border-y border-gray-400 mt-3 flex justify-center items-center pt-4" style="gap: 6.5rem;">
        <div>
            <img :src="logo" alt="logo ecommerce" />
        </div>
        <div class="relative flex border rounded-sm border-gray-200 bg-gray-200" style="width: 48rem;">
            <input type="text" id="search_ecommerce" class="bg-gray-50 outline-none p-2 rounded-sm indent-12 text-2xl placeholder-gray-500 focus:ring-0 border-0 h-16" placeholder="Search..." style="width: 63rem;"/>
            <div class="absolute top-5 left-5 font-semibold">
                <img :src="search" alt="search icon" class="w-7 h-7">
            </div>
            <div class="h-14 w-px bg-gray-400 absolute top-1 z-10 right-80"></div>
            <div class="relative">
                <select class="bg-gray-50 border-0 outline-none text-gray-500 h-full px-6 absolute right-20 appearance-none text-2xl">
                    <option value="" disabled selected>Select category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                </select>
                <div class="absolute top-6 right-16 pointer-events-none">
                    <ArrowDownIcon />
                </div>
            </div>

        </div>
        <div class="flex gap-4 justify-center items-center">
            <div>
                <i class="fa-solid fa-circle-user fa-2xl text-gray-500"></i>
            </div>
            <div>
                <i class="fa-regular fa-heart fa-2xl text-gray-500"></i>
            </div>
            <div>
                $00.00
            </div>
            <div class="relative inline-block">
                <i class="fa-solid fa-bag-shopping fa-2xl text-gray-500"></i>
                <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#FE8080] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    1
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center" style="gap: 34rem;">
        <div class="relative text-xl">
            <select class="bg-transparent border-0 outline-none text-gray-500 h-10">
                <option value="" disabled selected>All Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
            </select>
            <div class="absolute top-3 right-0.5">
                <ArrowDownIcon />
            </div>
        </div>
        <div class="flex gap-8 justify-center items-center text-gray-500  text-xl">
            <div>
               HOME
            </div>
            <div class="relative">
                <select class="bg-transparent border-0 outline-none text-gray-500 h-10 w-20">
                    <option value="" disabled selected>SHOP</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                </select>
                <div class="absolute top-3 right-px">
                    <ArrowDownIcon />
                </div>
            </div>
            <div>
                WOMEN
            </div>
            <div>
                MEN
            </div>
            <div>
                OUTERWEAR
            </div>
            <div>
                BLOG
            </div>
            <div>
                CONTACT
            </div>
        </div>
    </div>
</template>
