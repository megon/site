<template>
  <div id="app">
    <TheHeader />
    <TheHeroSection />
    <TheServiceSection />
    <TheClientsSection />
    <TheContactSection />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheHeroSection from './components/TheHeroSection.vue'
import TheServiceSection from './components/TheServiceSection.vue'
import TheClientsSection from './components/TheClientsSection.vue'
import TheContactSection from './components/TheContactSection.vue'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheHeroSection,
    TheServiceSection,
    TheClientsSection,
    TheContactSection
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
