<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NButton, NMenu, NDropdown } from 'naive-ui'

const route = useRoute()
const router = useRouter()

const links = [
  { label: 'Home', key: 'home', to: '/' },
  { label: 'Services', key: 'services', to: '/services' },
  { label: 'Contact', key: 'contact', to: '/contact' },
]

const menuOptions = links.map(({ label, key }) => ({ label, key }))
const activeKey = computed(() => route.name)

const isMobile = ref(false)
function syncIsMobile() {
  isMobile.value = window.innerWidth < 768
}

function handleSelect(key) {
  const link = links.find((item) => item.key === key)
  if (link && link.to !== route.path) {
    router.push(link.to)
  }
}

onMounted(() => {
  syncIsMobile()
  window.addEventListener('resize', syncIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncIsMobile)
})
</script>

<template>
  <header class="navbar">
    <div class="navbar-inner">
      <span class="brand">Hanamaru</span>

      <n-menu
        v-if="!isMobile"
        class="desktop-menu"
        mode="horizontal"
        :value="activeKey"
        :options="menuOptions"
        @update:value="handleSelect"
      />

      <n-dropdown
        v-else
        trigger="click"
        placement="bottom-end"
        :options="menuOptions"
        @select="handleSelect"
      >
        <n-button quaternary class="hamburger" aria-label="Menu">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </n-button>
      </n-dropdown>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(8px);
  background: rgba(10, 10, 20, 0.55);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
}

.brand {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.hamburger {
  color: #f5f7fa;
}
</style>
