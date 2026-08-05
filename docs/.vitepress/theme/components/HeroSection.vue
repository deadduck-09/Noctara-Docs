<template>
  <div class="hero-container">
    <div class="hero-content">
      <img :src="withBase('/logo.png')" alt="Noctara Logo" class="hero-logo" />
      <h1 class="hero-title hero-text">Noctara</h1>
      <p class="hero-tagline hero-text">
        Modern desktop experience for Niri & Hyprland<br />
        Because your desktop deserves better life choices.
      </p>

      <div class="hero-actions">
        <a :href="withBase('/getting-started/requirements.html')" class="btn btn-primary">
          Get Started
        </a>
        <a 
          href="https://github.com/deadduck-09/noctara-dots" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-alt"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'
import { gsap } from 'gsap'

onMounted(() => {
  const mm = gsap.matchMedia()

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const tl = gsap.timeline()

    // Initial Reveal
    tl.fromTo(
      '.hero-logo',
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' }
    )
      .fromTo(
        '.hero-text',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
        '-=0.8'
      )
      .fromTo(
        '.hero-actions .btn',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.1 },
        '-=0.5'
      )

    // Continuous subtle float
    gsap.to('.hero-logo', {
      y: -12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.2,
    })
  })
})
</script>

<style scoped>
.hero-container {
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: calc(var(--vp-nav-height) + 1rem) 1.5rem 2rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-logo {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.25rem;
  object-fit: contain;
  filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.25));
}

.hero-title {
  font-size: clamp(3rem, 7vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  padding-bottom: 0.1em;
  margin-bottom: 0.85rem;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-tagline {
  font-size: 1.15rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  position: relative;
  z-index: 10;
}

.btn {
  padding: 0.7rem 1.6rem;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: #8b5cf6;
  color: #fff;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.35);
}

.btn-alt {
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-1);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
</style>
