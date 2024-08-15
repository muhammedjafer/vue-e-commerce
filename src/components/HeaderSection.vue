<script setup>
const props = defineProps({
    header: String,
    description: String,
    inDescription: String,
});
</script>

<template>
    <div class="text-6xl font-bold mb-12">{{ props.header }}</div>
    <div class="text-gray-500 text-3xl font-normal">
        {{ props.description }} <br />
        {{ props.inDescription }}
    </div>
</template>
