<script setup>
import ShopNow from './ShopNow.vue';
import cards from "@/assets/images/footer/cards.png";
import logo from "@/assets/images/footer/footer-logo.png";
import socialMedia from "@/assets/images/footer/social-media-icons.png";
</script>

<template>
    <div class="bg-gray-100 h-56 flex justify-center items-center gap-12">
        <span class="font-semibold text-6.5xl text-black">Newsletter</span>
        <input type="text" placeholder="Email Address" class="bg-white border-2 border-gray-200 text-2xl outline-none p-6 rounded-sm indent-8 placeholder-gray-400 focus:ring-0" style="width: 693px;" />
        <div class="relative flex justify-center items-center">
            <ShopNow position="absolute -left-3" img-style="ml-4"/>
        </div>
    </div>
    <div class="bg-black text-white" style="height: 704px;">
        <div class="flex justify-center items-center gap-36 py-24">
            <div class="flex flex-col justify-center items-start gap-4">
                <span class="font-semibold text-2xl mb-2">Information</span>
                <span>About Us</span>
                <span>Privacy Policy</span>
                <span>Returns Policy</span>
                <span>Shipping Policy</span>
                <span>Dropshipping</span>
            </div>
            <div class="flex flex-col justify-center items-start gap-4">
                <span class="font-semibold text-2xl mb-2">Account</span>
                <span>Dashboard</span>
                <span>My Orders</span>
                <span>My Wishlist</span>
                <span>Account details</span>
                <span>Track My Orders</span>
            </div>
            <div class="flex flex-col justify-center items-start gap-4">
                <span class="font-semibold text-2xl mb-2">Shop</span>
                <span>Affiliate</span>
                <span>Bestsellers</span>
                <span>Discount</span>
                <span>Latest Products</span>
                <span>Sale Products</span>
            </div>
            <div class="flex flex-col justify-center items-start gap-4">
                <span class="font-semibold text-2xl mb-2">Categories</span>
                <span>Women</span>
                <span>Men</span>
                <span>Bags</span>
                <span>Outerwear</span>
                <span>Shoes</span>
            </div>
            <div class="flex flex-col justify-center items-start gap-4">
                <span class="font-semibold text-2xl mb-2">Got A Question? Contact Us</span>
                <span>98 Agnibina Road, Jinnah Super Market,</span>
                <span>2nd Floor, Jhenidah, Bangladesh</span>
                <span>+123 4567 890</span>
                <span>support@themetidy.com</span>
                <span>Help Center</span>
            </div>
        </div>
        <div class="bg-[#222222] h-44 flex justify-center items-center gap-64">
            <div>
                <img :src="logo" alt="footer logo" class="w-96 h-36">
            </div>
            <div>
                <img :src="socialMedia" alt="footer social media">
            </div>
            <div>
                <img :src="cards" alt="footer cards">
            </div>
        </div>
        <div class="flex justify-center items-center h-24" style="gap: 46rem;">
            <span><i class="fa-regular fa-copyright"></i> Clonto. All Rights Reserved.</span>
            <div class="flex justify-content items-center gap-3">
                <span>Privacy Policy</span>
                <span>|</span>
                <span>Terms and Conditions</span>
                <span>|</span>
                <span>Returns Policy</span>
            </div>
        </div>
    </div>
</template>
