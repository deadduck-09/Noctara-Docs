<template>
  <section class="section-container">
    <h2 class="section-title">Highlights</h2>
    <div class="highlights-grid">
      <div v-for="(item, i) in highlights" :key="i" class="highlight-card">
        <span class="icon">{{ item.icon }}</span>
        <span class="label">{{ item.text }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  { icon: '🌙', text: 'Automatic wallpaper rotation' },
  { icon: '🎨', text: 'Theme synchronization across applications' },
  { icon: '⚡', text: 'Fast startup with a modular configuration' },
  { icon: '🖥', text: 'Native support for Niri and Hyprland' },
  { icon: '📦', text: 'One-command installation' },
  { icon: '🔧', text: 'Easy customization' }
]

onMounted(() => {
  gsap.fromTo('.highlight-card',
    { y: 30, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: '.highlights-grid', start: 'top 85%' }
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
  letter-spacing: -0.02em;
  border-top: none !important;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.highlight-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem 1.25rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.highlight-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.icon {
  font-size: 1.4rem;
}

.label {
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  font-weight: 500;
}
</style>
