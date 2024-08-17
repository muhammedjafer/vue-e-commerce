<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import star from "@/assets/images/star.png";
import { useRoute, RouterLink } from "vue-router";
import half_star from "@/assets/images/half-star.png";
import barcode from "@/assets/images/barcode.png";
import right_arrow from "@/assets/images/right-arrow.png";
import payments from "@/assets/images/payments.png";
import ProductList from "@/components/ProductList.vue";

const route = useRoute();
const products = ref([]);

const productId = route.params.id;

const state = reactive({
    product: {},
});

const sizes = ["S", "M", "L", "XL"];

const truncateTitle = (title) => {
    if (!title) return "";
    const maxLength = 30; // Maximum number of characters
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
};

const getStarIcons = (rating) => {
    if (!rating) return "";
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate % 1 >= 0.5;

    return {
        fullStars: Array(fullStars).fill(star),
        halfStar: hasHalfStar ? half_star : null,
    };
};

const fetchProductDetails = async (productId) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        state.product = data;
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
};

const fetchProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=4");
        const data = await response.json();
        products.value = data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

// Fetch product details on component mount
onMounted(async () => {
    window.scrollTo(0, 0);
    await fetchProductDetails(route.params.id);
    await fetchProducts();
});

// Watch for changes to the route and update product details accordingly
watch(
    () => route.params.id,
    async (newId) => {
        await fetchProductDetails(newId);
        window.scrollTo(0, 0);
    }
);
</script>

<template>
    <div class="mt-26 flex flex-col justify-center items-center">
        <div class="text-gray-500 text-2xl relative right-20 mb-9" style="margin-right: 61rem">Home > Product Details</div>
        <div class="flex justify-center items-start">
            <div class="flex flex-col gap-2">
                <img :src="state.product?.image" alt="product" class="object-contain border border-gray-200 mb-4" style="width: 570px; height: 643px" />
                <div class="flex gap-2">
                    <img v-for="n in 7" :key="n" :src="state.product?.image" :alt="`Image ${n}`" style="width: 76px; height: 76px" />
                </div>
            </div>
            <div class="flex flex-col items-start gap-8 pl-4">
                <div>
                    <div class="text-3xl text-black font-semibold">{{ truncateTitle(state.product?.title) }}</div>
                </div>
                <div class="flex flex-start justify-center items-center gap-3">
                    <div v-for="(icon, index) in getStarIcons(state.product?.rating).fullStars" :key="index">
                        <img :src="icon" :alt="`star-${state.product?.id}-${index}`" class="w-5 h-5" />
                    </div>
                    <div v-if="getStarIcons(state.product?.rating).halfStar">
                        <img :src="getStarIcons(state.product?.rating).halfStar" :alt="`half-star-${state.product?.id ?? ''}`" class="w-5 h-6" />
                    </div>
                    <div class="pl-2 text-gray-500 text-3xl">{{ state.product.rating?.count }} Reviews</div>
                </div>
                <div class="flex justify-center items-center gap-7">
                    <div class="text-gray-500 text-3xl">Vendor: Asos</div>
                    <div class="text-gray-500 text-3xl">Type: T-Shirt</div>
                </div>
                <div class="text-gray-500 text-3xl">SKU: TTHABIT25</div>
                <div class="text-black text-3xl font-semibold">${{ state.product?.price }}</div>
                <div class="w-full border-2 border-dashed border-gray-500 p-3 flex flex-col gap-3 pr-12">
                    <div class="text-xl text-gray-500">40 PRODUCTS LEFT IN STOCK, HURRY UP!</div>
                    <div class="flex">
                        <hr class="border-t-4 border-gray-700 w-1/2" />
                        <hr class="border-t-4 border-gray-300 w-1/2" />
                    </div>
                    <div class="flex gap-10">
                        <div v-for="n in 5" :key="n" class="text-xl flex flex-col justify-center items-center bg-gray-200 p-2 w-17 h-17 leading-4">
                            <span>05</span>
                            <span class="text-gray-500">Day</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center gap-8">
                    <div class="flex justify-center items-center gap-2">
                        <div class="text-gray-500 text-4xl">Color:</div>
                        <div v-for="n in 3" :key="n" class="bg-black w-5 h-5"></div>
                    </div>
                    <div class="w-px h-6 bg-black"></div>
                    <div class="flex justify-center items-center gap-8">
                        <div v-for="size in sizes" :key="size">
                            <div>
                                <span class="flex items-center justify-center text-gray-500 w-12 h-8 border border-gray-200 ms-1 text-center" :class="{ 'border border-red-500': size === 'M' }">{{ size }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="w-60 h-16 flex justify-between items-center border-2 border-gray-400">
                        <div class="border-2 border-r-gray-400 p-5"><i class="fa-solid fa-2xl fa-plus text-gray-400"></i></div>
                        <div class="text-gray-400 text-3xl">1</div>
                        <div class="border-2 border-l-gray-400 p-5"><i class="fa-solid fa-2xl fa-plus text-gray-400"></i></div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-17 bg-[#FE8080] relative left-12" style="height: 4.5rem"></div>
                        <h4 class="underline z-10 text-4xl text-black me-2">Add To Cart</h4>
                        <img :src="right_arrow" alt="the right arrow" style="width: 37px; height: 19px" />
                    </div>
                </div>
                <div class="flex justify-center items-center gap-4">
                    <div class="w-14 h-14 border border-gray-400 flex justify-center items-center"><i class="fa-brands fa-xl fa-facebook-f"></i></div>
                    <div class="w-14 h-14 border border-gray-400 flex justify-center items-center"><i class="fa-brands fa-xl fa-twitter"></i></div>
                    <div class="w-14 h-14 border border-gray-400 flex justify-center items-center"><i class="fa-brands fa-xl fa-linkedin-in"></i></div>
                    <div class="w-14 h-14 border border-gray-400 flex justify-center items-center"><i class="fa-brands fa-xl fa-instagram"></i></div>
                    <div class="w-14 h-14 border border-gray-400 flex justify-center items-center"><i class="fa-brands fa-xl fa-vimeo-v"></i></div>
                    <div class="w-14 h-14 border border-gray-400 flex justify-center items-center"><i class="fa-brands fa-xl fa-pinterest-p"></i></div>
                </div>
            </div>
            <div class="flex flex-col gap-8 pl-7">
                <div style="width: 248px; height: 125px">
                    <img :src="barcode" alt="barcode is here" />
                </div>
                <div style="width: 248px; height: 222px">
                    <img :src="payments" alt="payments is here" />
                </div>
                <div class="flex flex-col gap-4">
                    <span class="text-2xl text-gray-400 underline"><i class="fa-solid fa-greater-than fa-sm pr-2 text-black"></i> Size Guide</span>
                    <span class="text-2xl text-gray-400 underline"><i class="fa-solid fa-greater-than fa-sm pr-2 text-black"></i> Return Policy</span>
                    <span class="text-2xl text-gray-400 underline"><i class="fa-solid fa-greater-than fa-sm pr-2 text-black"></i> Ask Any Question</span>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-baseline gap-5 text-gray-500 text-3xl my-44">
            <span class="text-black font-semibold">Product Description</span>
            <hr class="h-0.5 w-24 bg-gray-500" />
            <span>Refund Policy</span>
            <hr class="h-0.5 w-24 bg-gray-500" />
            <span>Customer Reviews</span>
            <hr class="h-0.5 w-24 bg-gray-500" />
            <span>Terms Of Service</span>
        </div>
        <div class="flex flex-col justify-center gap-4 mx-8">
            <span class="font-semibold text-3xl">Advaned features</span>
            <p class="text-gray-500 text-2xl" style="max-width: 1420px">{{ state.product?.description }}.</p>
            <ul class="pl-12 text-2xl flex flex-col gap-2 text-gray-500">
                <li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>2. Lorem ipsum dolor sit.</li>
                <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident maiores ut!</li>
                <li>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident maiores ut!</li>
                <li>5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident maiores ut!</li>
                <li>6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident maiores ut!</li>
                <li>7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident maiores ut!</li>
            </ul>
            <span class="font-semibold text-3xl my-3">Fashion</span>
            <p class="text-gray-500 text-2xl" style="max-width: 1420px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit ipsam, dicta voluptas fugit quibusdam harum impedit accusantium delectus iure incidunt amet non praesentium ut consectetur eos quam? Quia ut quos, quod tempora, expedita alias fugit, enim rem nam incidunt iste. Sapiente, quia aut quidem nemo suscipit adipisci placeat earum officia? Quam asperiores fugit vero quas quae, facilis eligendi incidunt aliquam harum ullam voluptas non.</p>
        </div>
        <div class="flex flex-col justify-center text-center mt-36">
            <div class="flex flex-col justify-center text-center">
                <div class="text-6xl font-bold mb-12" style="line-height: 5rem;">Customers who <br> bought this item also bought!</div>
            </div>
            <div class="mt-12 grid grid-rows-1 grid-flow-col gap-6 justify-center items-end mb-28">
                <div v-for="product in products" :key="product.id" class="row-span-1">
                    <ProductList width="330px" height="402px" :product="product" :sizes="sizes" style-icons="pt-5" style-sizes="pb-5" />
                </div>
            </div>
        </div>
    </div>
</template>
