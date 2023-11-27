<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});
</script>
<template>
  <section class="bg-black-50">
    <div class="container">
      <div class="flex justify-center items-center min-h-screen">
        <NuxtLink to="/" class="absolute top-4 left-4 bg-green-600 text-black h-[45px] w-[45px] flex justify-center items-center rounded-full shadow-lg cursor-pointer">
          <i class="ri-arrow-left-line"></i>
        </NuxtLink>
        <Register />
      </div>
    </div>
  </section>
</template>