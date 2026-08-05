<template>
  <div ref="glowRef" class="mouse-glow"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const glowRef = ref(null)

const handleMouseMove = (e) => {
  if (!glowRef.value) return
  glowRef.value.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.mouse-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle, 
    rgba(124, 92, 255, 0.18) 0%, 
    rgba(89, 196, 255, 0.08) 40%, 
    transparent 70%
  );
  pointer-events: none;
  z-index: -1; /* Sits above Starfield, behind page text/cards */
  will-change: transform;
}
</style>
