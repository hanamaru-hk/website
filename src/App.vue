<script setup>
import { computed } from 'vue'
import {
  NConfigProvider,
  NMessageProvider,
  enUS,
  dateEnUS,
  zhTW,
  dateZhTW,
} from 'naive-ui'
import { useI18n } from 'vue-i18n'
import VantaBackground from './components/VantaBackground.vue'
import NavBar from './components/NavBar.vue'

const { t, locale } = useI18n()

const naiveLocales = {
  en: { locale: enUS, dateLocale: dateEnUS },
  'zh-Hant': { locale: zhTW, dateLocale: dateZhTW },
}

const naiveLocale = computed(
  () => naiveLocales[locale.value] ?? naiveLocales.en,
)
</script>

<template>
  <n-config-provider :locale="naiveLocale.locale" :date-locale="naiveLocale.dateLocale">
    <n-message-provider>
      <div class="app">
        <VantaBackground />
        <NavBar />
        <main class="page">
          <router-view />
        </main>
        <footer class="footer">
          {{ t('footer.rights') }}
        </footer>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', Arial, sans-serif;
  color: #1f2329;
  background-color: #f5f7fa;
}

#app {
  min-height: 100%;
}
</style>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page {
  position: relative;
  flex: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
}

.footer {
  position: relative;
  padding: 1.25rem 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(31, 35, 41, 0.6);
}
</style>
