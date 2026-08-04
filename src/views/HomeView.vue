<script setup>
const slogan = 'Build it. Own it.'
</script>

<template>
  <section class="hero">
    <h1 class="slogan">{{ slogan }}</h1>
    <p class="subtitle">Hanamaru Software</p>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 55vh;
  text-align: center;
}

.slogan {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  line-height: 1.3;
  background: linear-gradient(135deg, #4aa3ff, #8f4aff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: rgba(31, 35, 41, 0.7);
}
</style>
