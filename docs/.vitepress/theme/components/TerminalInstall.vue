<template>
  <div class="terminal-container">
    <div class="terminal-header">
      <div class="dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <span class="title">install.sh</span>
      
      <button @click="copyCommands" class="copy-button" title="Copy to clipboard">
        <span v-if="copied" class="copied-label">Copied!</span>
        <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
    <div class="terminal-body">
      <span class="prompt">$</span> <span class="typewriter"></span><span class="cursor">_</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const copied = ref(false)
const rawCommands = `git clone https://github.com/deadduck-09/Noctara-Dots.git\ncd Noctara-Dots\n./install.sh`

const copyCommands = async () => {
  try {
    await navigator.clipboard.writeText(rawCommands)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

onMounted(() => {
  const displayCommands = "git clone https://github.com/deadduck-09/Noctara-Dots.git\n$ cd Noctara-Dots\n$ ./install.sh"
  
  gsap.to('.cursor', { opacity: 0, duration: 0.5, repeat: -1, ease: 'steps(1)' })

  gsap.to('.typewriter', {
    text: displayCommands,
    duration: 2.8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.terminal-container',
      start: 'top 80%',
    }
  })
})
</script>

<style scoped>
.terminal-container {
  background: #090d16;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  margin: 2rem auto;
  max-width: 650px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}

.terminal-header {
  background: #111622;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.title {
  color: #8b949e;
  font-family: monospace;
  font-size: 0.85rem;
}

.copy-button {
  background: transparent;
  border: none;
  color: #8b949e;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
}

.copy-button:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.copied-label {
  font-size: 0.75rem;
  color: #34d399;
  font-weight: 600;
}

.terminal-body {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: #e6edf3;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: left;
  white-space: pre-wrap;
}

.prompt {
  color: #8b5cf6;
  margin-right: 8px;
}

.cursor {
  color: #8b5cf6;
}
</style>
