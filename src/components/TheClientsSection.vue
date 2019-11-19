<template>
  <section id="clients-section" class="clients">
    <div class="content">
      <h3 class="title gradient-text text-left">A Few of Our Clients</h3>
      <div class="logos">
        <img src="../assets/client-logos-desktop.png" class="responsive show-desktop" alt="Our stack: Ruby on Rails, Node.js, Javascript, Vue.js, Angular">
        <img src="../assets/client-logos.png" class="responsive show-mobile" alt="Our stack: Ruby on Rails, Node.js, Javascript, Vue.js, Angular">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheClientsSection'
}
</script>

<style scoped>
.logos {
  width: 90%;
  margin-top: 60px;
}
</style>
