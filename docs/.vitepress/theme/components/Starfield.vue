<template>
  <canvas ref="canvasRef" class="starfield"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  // Mouse physics target
  let mouseX = 0
  let mouseY = 0
  let targetMouseX = 0
  let targetMouseY = 0

  const handleMouseMove = (e) => {
    // Calculate distance from center (-1 to 1)
    targetMouseX = (e.clientX - width / 2) / (width / 2)
    targetMouseY = (e.clientY - height / 2) / (height / 2)
  }

  window.addEventListener('mousemove', handleMouseMove)

  // Generate stars
  const stars = Array.from({ length: 110 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 1.6 + 0.4,
    alpha: Math.random(),
    speed: Math.random() * 0.012 + 0.005,
    vy: -(Math.random() * 0.25 + 0.05),
    depth: Math.random() * 25 + 10 // Parallax strength factor
  }))

  const handleResize = () => {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }

  window.addEventListener('resize', handleResize)

  const draw = () => {
    ctx.clearRect(0, 0, width, height)

    // Smoothly interpolate mouse position (lerp)
    mouseX += (targetMouseX - mouseX) * 0.05
    mouseY += (targetMouseY - mouseY) * 0.05

    stars.forEach((star) => {
      // Float upward gently
      star.y += star.vy
      if (star.y < 0) star.y = height

      // Twinkle effect
      star.alpha += star.speed
      if (star.alpha > 1 || star.alpha < 0.2) star.speed = -star.speed

      // Mouse offset based on star depth
      const offsetX = mouseX * star.depth
      const offsetY = mouseY * star.depth

      ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha) * 0.85})`
      ctx.beginPath()
      ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2)
      ctx.fill()
    })

    animationId = requestAnimationFrame(draw)
  }

  draw()

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationId)
  })
})
</script>

<style scoped>
.starfield {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2; /* Sits behind everything */
  pointer-events: none;
  background: radial-gradient(
    circle at 50% 10%, 
    rgba(124, 92, 255, 0.12) 0%, 
    rgba(89, 196, 255, 0.04) 35%, 
    rgba(7, 9, 14, 1) 100%
  );
}
</style>
