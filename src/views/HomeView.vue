<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <h1 class="slogan">{{ t('home.slogan') }}</h1>
    <p class="subtitle">{{ t('home.subtitle') }}</p>
    <router-link class="offer-btn" :to="{ name: 'services' }">
      {{ t('home.seeOffers') }}
    </router-link>
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
  margin-top: 1.25rem;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, #2f9e44, #0b7285);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 12px rgba(15, 118, 110, 0.3);
}

.offer-btn {
  margin-top: 1.75rem;
  padding: 0.7rem 1.75rem;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(135deg, #2f9e44, #0b7285);
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(15, 118, 110, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.offer-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(15, 118, 110, 0.4);
}
</style>
