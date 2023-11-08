<script lang="ts" setup>
import { products } from '~/composables/constants/products';
const selectedCategory = ref("");
const allProducts = computed(() => {
 if (selectedCategory.value) {
 return products.filter((item) => item.category === selectedCategory.value);
 }
 return products;
});
</script>
<template>
 <section>
 <div class="container">
 <div class="py-10">
 <div class="mb-6 flex justify-end gap-6">
    <NuxtLink to="/category/create" class="text-bold bg-green-500 text-black flex justify-center items-center px-3 rounded-lg">
        Create Category
    </NuxtLink>
 <Dropdown @selected-category="selectedCategory = $event" />
 </div>
 <div class="flex gap-6 flex-wrap mx-auto">
 <template v-for="(item, index) in allProducts" :key="index">
 <CardsCardProduct :product="item" class="w-[calc(100%/4-18px)]"/>
 </template>
 </div>
 </div>
 </div>
 </section>
</template>

<style >
body{
    background-color: black;
    color: rgb(0, 255, 4);
    border: 2px solid rgb(1, 249, 1);
}
</style>