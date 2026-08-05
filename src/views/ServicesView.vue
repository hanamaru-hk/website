<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { NGrid, NGi, NCard, NTag } from 'naive-ui'

const { t, tm } = useI18n()

const services = computed(() => tm('services.items'))
</script>

<template>
  <section>
    <h2 class="title">{{ t('services.title') }}</h2>

    <n-grid :x-gap="16" :y-gap="16" responsive="screen" cols="1 s:2">
      <n-gi v-for="(service, index) in services" :key="index">
        <n-card :title="service.name" class="service-card">
          <p class="description">{{ service.description }}</p>

        </n-card>
      </n-gi>
    </n-grid>
  </section>
</template>

<style scoped>
.title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.service-card {
  height: 100%;
}

.description {
  color: rgba(31, 35, 41, 0.8);
  line-height: 1.6;
}

.tags {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
