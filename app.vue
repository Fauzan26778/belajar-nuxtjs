<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    name: 'App',
    components: {
    Header
  }
}
</script>

