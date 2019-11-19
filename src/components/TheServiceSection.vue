<template>
  <section id="service-section">
    <div class="content">
      <h3 class="title gradient-text text-left">What We Do</h3>

      <div class="wrapper reverse">
        <div>
          <p class="text-left">
            We are a software agency located in São Paulo 🇧🇷, specialized in building scalable web apps, products, and services.
            Working in an agile way and with the latest frameworks,
            our developers and engineers are aways eager to solve problems and amaze your expectations.
          </p>

          <ul style="opacity: 1;">
            <li>Web Development</li>
            <li>API Development</li>
            <li>Full-Stack Development</li>
            <li>System Integrations</li>
            <li>Maintenance & Support</li>
            <li>Project Recovery</li>
          </ul>
        </div>
        <div>
          <div class="logos">
            <img src="../assets/tech-logos.png" class="responsive" alt="Our stack: Ruby on Rails, Node.js, Javascript, Vue.js, Angular" >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheServiceSection'
}
</script>

<style scoped>

.logos {
  float: left;
  margin-bottom: 30px;
  width: 60%;
}

@media (min-width:768px) {
  .logos {
    float: right;
  }
}

ul {
  font-size: .9rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 34px;
  max-width: 510px;
  text-align: left;
}

li {
  color: #939999;
  line-height: 1.4em;
  margin: 0.5em 0;
  width: 50%;
  font-family: 'Larsseit-Regular', sans-serif;
}
</style>

