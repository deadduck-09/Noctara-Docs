<template>
  <section class="section-container">
    <h2 class="section-title">Supported WM's</h2>
    <div class="status-grid">
      <div v-for="comp in components" :key="comp.name" class="status-card">
        <span class="comp-name">{{ comp.name }}</span>
        <span :class="['status-badge', comp.status]">
          <span class="status-dot"></span>
          {{ comp.status === 'supported' ? 'Supported' : 'Planned' }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const components = [
  { name: 'Niri', status: 'supported' },
  { name: 'Hyprland  ', status: 'supported' },
  { name: 'MangoWM  ', status: 'supported' },
  { name: 'Sway', status: 'planned' }
]

onMounted(() => {
  gsap.fromTo('.status-card',
    { y: 20, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: '.status-grid', start: 'top 85%' }
    }
  )
})
</script>

<style scoped>
.section-container {
  max-width: 900px;
  margin: 5rem auto;
  padding: 0 1.5rem;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  border-top: none !important;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.status-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 0.85rem 1.2rem;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.status-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
}

.comp-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

/* Base Badge Styles */
.status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

/* Supported Variant (Emerald Green Glow) */
.status-badge.supported {
  color: #34d399;
  background: rgba(52, 211, 153, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.25);
}

.status-badge.supported .status-dot {
  background: #34d399;
  box-shadow: 0 0 8px #34d399;
}

/* Planned Variant (Cosmic Violet Glow) */
.status-badge.planned {
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.25);
}

.status-badge.planned .status-dot {
  background: #a78bfa;
  box-shadow: 0 0 8px #a78bfa;
}
</style>
