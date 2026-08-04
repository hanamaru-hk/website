<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { NButton, NMenu, NDropdown } from 'naive-ui'
import { useLocale } from '../composables/useLocale'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { currentLocale, setLocale, locales } = useLocale()

const links = [
  { label: computed(() => t('nav.home')), key: 'home', to: '/' },
  { label: computed(() => t('nav.services')), key: 'services', to: '/services' },
  { label: computed(() => t('nav.contact')), key: 'contact', to: '/contact' },
]

const menuOptions = computed(() =>
  links.map(({ label, key }) => ({ label: label.value, key })),
)

const languageOptions = computed(() =>
  Object.entries(locales).map(([value, { label }]) => ({
    label,
    key: value,
  })),
)

const activeKey = computed(() => route.name)
const currentShortLabel = computed(() => locales[currentLocale.value].shortLabel)

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

function handleLanguageSelect(key) {
  setLocale(key)
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

      <n-dropdown
        trigger="click"
        placement="bottom-end"
        :options="languageOptions"
        @select="handleLanguageSelect"
      >
        <n-button quaternary class="language-switcher" aria-label="Language">
          {{ currentShortLabel }}
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
  background: rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(31, 35, 41, 0.08);
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

.hamburger {
  color: #1f2329;
}

.language-switcher {
  color: #1f2329;
}
</style>
