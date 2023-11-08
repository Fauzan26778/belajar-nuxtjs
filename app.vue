<template>
  <div>
    <VitePwaManifest />
    
    <Header />
      <NuxtPage/>
    <Footer />
  <BackgroundApp />
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

