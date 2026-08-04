<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const bgEl = ref(null)
let vantaEffect = null

onMounted(() => {
  if (!window.VANTA || !window.VANTA.BIRDS) return

  vantaEffect = window.VANTA.BIRDS({
    el: bgEl.value,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    backgroundColor: 0xf5f7fa,
    color1: 0x7ad3ff,
    color2: 0xaf5aff,
  })
})

onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy()
    vantaEffect = null
  }
})
</script>

<template>
  <div ref="bgEl" class="vanta-background" aria-hidden="true"></div>
</template>

<style scoped>
.vanta-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>
