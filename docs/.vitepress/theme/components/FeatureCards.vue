<template>
  <div class="features-wrapper">
    <div class="features-grid">
      <div 
        v-for="(feature, index) in features" 
        :key="index" 
        class="feature-card"
        @mousemove="handleMouseMove($event, index)"
        @mouseleave="handleMouseLeave(index)"
        :ref="el => { if(el) cardRefs[index] = el }"
      >
        <div class="icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.details }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { icon: '🧩', title: 'Modular', details: 'Organized configuration that is easy to understand, extend and maintain.' },
  { icon: '🖥', title: 'Different WM Support', details: 'Built for both Niri and Hyprland and Mango without maintaining separate projects.' },
  { icon: '🎨', title: 'Beautiful Defaults', details: 'Carefully designed themes, wallpapers and workflows that work out of the box.' }
]

const cardRefs = ref([])

const handleMouseMove = (e, index) => {
  const card = cardRefs.value[index]
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2

  // 3D Tilt calculations
  const rotateX = (-y / rect.height) * 12
  const rotateY = (x / rect.width) * 12

  gsap.to(card, {
    rotateX: rotateX,
    rotateY: rotateY,
    scale: 1.02,
    duration: 0.2,
    ease: 'power1.out',
    transformPerspective: 1000
  })
}

const handleMouseLeave = (index) => {
  const card = cardRefs.value[index]
  if (!card) return

  gsap.to(card, {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    duration: 0.5,
    ease: 'power2.out'
  })
}

onMounted(() => {
  gsap.fromTo('.feature-card', 
    { y: 40, opacity: 0, scale: 0.96 },
    {
      y: 0, opacity: 1, scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.features-wrapper',
        start: 'top 85%'
      }
    }
  )
})
</script>

<style scoped>
/* Restricts width & adds horizontal spacing so tiles don't stick to screen edges */
.features-wrapper {
  max-width: 1120px;
  margin: 3rem auto;
  padding: 0 2rem; 
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  perspective: 1000px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 14px;
  backdrop-filter: blur(12px);
  transform-style: preserve-3d;
  will-change: transform;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.15);
}

.icon {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  border: none !important;
}

.feature-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.55;
  font-size: 0.95rem;
}
</style>
