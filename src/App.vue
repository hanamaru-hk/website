<script setup>
import { darkTheme } from 'naive-ui'
import { NConfigProvider, NMessageProvider } from 'naive-ui'
import VantaBackground from './components/VantaBackground.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <div class="app">
        <VantaBackground />
        <NavBar />
        <main class="page">
          <router-view />
        </main>
        <footer class="footer">
          © 2026 Hanamaru Company Limited 花丸有限公司
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
  color: #f5f7fa;
  background-color: #0a0a14;
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
  color: rgba(245, 247, 250, 0.6);
}
</style>
