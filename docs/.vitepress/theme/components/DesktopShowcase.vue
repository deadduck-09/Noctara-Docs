<template>
  <div class="showcase-container">
    <div class="showcase-text">
      <h2>Desktop Preview</h2>
      <p>A polished desktop focused on simplicity, consistency and speed.</p>
    </div>
    
    <div class="showcase-wrapper-outer">
      <div class="showcase-image-wrapper">
        <img src="/images/desktop.png" alt="Noctara Desktop" class="showcase-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.fromTo('.showcase-image-wrapper',
    { y: 60, opacity: 0, scale: 1.05 },
    {
      y: 0, opacity: 1, scale: 1,
      duration: 1.1,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.showcase-container',
        start: 'top 80%',
      }
    }
  );
})
</script>

<style scoped>
.showcase-container {
  margin: 4rem auto 6rem;
  text-align: center;
}

.showcase-text h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  border-top: none !important;
}

.showcase-text p {
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
}

/* Expanded max-width for a larger preview while preserving side gaps */
.showcase-wrapper-outer {
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 2rem;
}

.showcase-image-wrapper {
  position: relative;
  border-radius: 14px;
  padding: 8px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(56, 189, 248, 0.25);
  box-shadow: 
    0 0 30px rgba(56, 189, 248, 0.18),
    0 0 70px rgba(30, 58, 138, 0.35),
    0 25px 50px rgba(0, 0, 0, 0.6);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.showcase-image-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 0 40px rgba(56, 189, 248, 0.28),
    0 0 90px rgba(37, 99, 235, 0.45),
    0 30px 60px rgba(0, 0, 0, 0.7);
}

.showcase-image {
  border-radius: 10px;
  width: 100%;
  display: block;
}
</style>
