<script setup>
import landing_page_of_girl from '@/assets/images/landing_page_of_girl.png';
import the_girl from '@/assets/images/knotted1-600x900.png';
import HomeDealsCard from '@/components/HomeDealsCard.vue';
import MiddleLandingPage from '@/components/MiddleLandingPage.vue';
import MiddleLandingPageSecond from '@/components/MiddleLandingPageSecond.vue';
import PopularPicks from '@/components/PopularPicks.vue';
import ReflectedSection from '@/components/ReflectedSection.vue';
import ShopNow from '@/components/ShopNow.vue';
import ProductCategory from '@/components/ProductCategory.vue';
import BrandSection from '@/components/BrandSection.vue';
import LastDeal from '@/components/LastDeal.vue';
import FlashSale from '@/components/FlashSale.vue';
import Services from '@/components/Services.vue';
</script>

<template>
    <div class="flex justify-center mt-48 gap-6 bg-cover bg-center">
        <div class="flex items-left flex-col mt-8 gap-6">
            <span class="text-7xl font-bold"> BIBENDUM SODA </span>
            <span class="text-7xl font-bold"> LES MAURIS </span>
            <span class="text-gray-500 text-4xl mt-4">Nunc Scelerisque Tincidunt Elit Vestibulum </span>
            <div class="flex items-center relative ml-2 mt-4">
                <ShopNow />
            </div>
        </div>
        <div class="relative left-28">
            <img :src="landing_page_of_girl" alt="landing page of the girl" class="relative right-24" style="width: 613px; height: 614px;">
            <img :src="the_girl" alt="the girl" class="absolute -top-24" style="width: 26rem;">
        </div>
    </div>
    <div class="flex justify-center -mt-8" style="margin-left: 51.5rem;">
        <HomeDealsCard />
    </div>
    <div>
        <MiddleLandingPage />
    </div>
    <div>
        <MiddleLandingPageSecond />
    </div>
    <PopularPicks />
    <ReflectedSection />
    <ProductCategory />
    <BrandSection />
    <LastDeal />
    <FlashSale />
    <Services />
</template>