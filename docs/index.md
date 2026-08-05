---
layout: page
sidebar: false
title: Noctara
---

<script setup>
import HeroSection from './.vitepress/theme/components/HeroSection.vue'
import FeatureCards from './.vitepress/theme/components/FeatureCards.vue'
import DesktopShowcase from './.vitepress/theme/components/DesktopShowcase.vue'
import HighlightsGrid from './.vitepress/theme/components/HighlightsGrid.vue'
import ComponentStatus from './.vitepress/theme/components/ComponentStatus.vue'
import TerminalInstall from './.vitepress/theme/components/TerminalInstall.vue'
import ScrollToTop from './.vitepress/theme/components/ScrollToTop.vue'
</script>

<HeroSection />

<FeatureCards />

<DesktopShowcase />

<HighlightsGrid />

<ComponentStatus />

<div style="max-width: 800px; margin: 0 auto; text-align: center; padding: 2rem 1.5rem 5rem;">
  <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem; border: none;">Quick Install</h2>
  <TerminalInstall />
</div>

<ScrollToTop />
