<script setup>
import { NGrid, NGi, NCard, NTag } from 'naive-ui'

const services = [
  {
    name: 'Custom Software Development',
    description: 'Tailored web and mobile applications built around your business needs.',
    tags: ['Web', 'Mobile'],
  },
  {
    name: 'System Integration',
    description: 'Connect and unify your existing tools, APIs, and data pipelines.',
    tags: ['API', 'Automation'],
  },
  {
    name: 'Cloud & DevOps',
    description: 'Reliable hosting, CI/CD pipelines, and infrastructure as code.',
    tags: ['AWS', 'CI/CD'],
  },
  {
    name: 'Maintenance & Support',
    description: 'Ongoing monitoring, updates, and support for running systems.',
    tags: ['Support', 'Monitoring'],
  },
]
</script>

<template>
  <section>
    <h2 class="title">Services</h2>
    <p class="intro">Software vendor services we offer.</p>

    <n-grid :x-gap="16" :y-gap="16" responsive="screen" cols="1 s:2">
      <n-gi v-for="service in services" :key="service.name">
        <n-card :title="service.name" class="service-card">
          <p class="description">{{ service.description }}</p>
          <div class="tags">
            <n-tag v-for="tag in service.tags" :key="tag" size="small" :bordered="false">
              {{ tag }}
            </n-tag>
          </div>
        </n-card>
      </n-gi>
    </n-grid>
  </section>
</template>

<style scoped>
.title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.intro {
  margin-bottom: 1.5rem;
  color: rgba(245, 247, 250, 0.7);
}

.service-card {
  height: 100%;
}

.description {
  color: rgba(245, 247, 250, 0.8);
  line-height: 1.6;
}

.tags {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
