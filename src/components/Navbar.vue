<script setup>
import ArrowDownIcon from "./svg_icons/ArrowDownIcon.vue";
import InstagramIcon from "./svg_icons/InstagramIcon.vue";
import ShoppingBagIcon from "./svg_icons/ShoppingBagIcon.vue";
import logo from "@/assets/images/logo_ecommerce.png";
import SearchIcon from "./svg_icons/SearchIcon.vue";
</script>

<template>
    <div class="flex justify-center items-center mt-3 gap-32">
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
                <ShoppingBagIcon />
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
    <div class="border-y border-gray-300 mt-3 flex justify-center items-center pt-4" style="gap: 7.5rem;">
        <div>
            <img :src="logo" alt="logo ecommerce" />
        </div>
        <div class="relative flex border rounded-sm border-gray-300">
            <input type="text" id="search_ecommerce" class="bg-gray-50 outline-none p-2 rounded-sm indent-8 w-64 placeholder-gray-500 focus:ring-0 border-0" placeholder="Search..." />
            <div class="absolute top-3 left-3 font-semibold">
                <SearchIcon />
            </div>
            <div class="h-9 w-px bg-gray-400 absolute top-0.5 z-10" style="right: 8.5rem;"></div>
            <div class="relative">
                <select class="bg-gray-50 border-0 outline-none text-gray-500 h-10">
                    <option value="" disabled selected>Select category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                </select>
                <div class="absolute top-3 right-0.5">
                    <ArrowDownIcon />
                </div>
            </div>
        </div>
        <div class="flex gap-4 justify-center items-center">
            <div>
                <i class="fa-solid fa-circle-user fa-xl text-gray-500"></i>
            </div>
            <div>
                <i class="fa-regular fa-heart fa-xl text-gray-500"></i>
            </div>
            <div>
                $00.00
            </div>
            <div>
                <i class="fa-solid fa-bag-shopping fa-xl text-gray-500"></i>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center" style="gap: 26rem;">
        <div class="relative">
            <select class="bg-transparent border-0 outline-none text-gray-500 h-10">
                <option value="" disabled selected>All category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
            </select>
            <div class="absolute top-3 right-0.5">
                <ArrowDownIcon />
            </div>
        </div>
        <div class="flex gap-4 justify-center items-center text-gray-500">
            <div>
               HOME
            </div>
            <div class="relative">
                <select class="bg-transparent border-0 outline-none text-gray-500 h-10 w-16">
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
