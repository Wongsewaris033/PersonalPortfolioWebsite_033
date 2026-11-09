<script setup>
import { ref, watch } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import WorkSection from './components/WorkSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterBar from './components/FooterBar.vue'

// Dark is the default; a saved choice from a previous visit wins.
function readSavedTheme() {
  try {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  } catch {
    return true
  }
}

const isDark = ref(readSavedTheme())

// Theme tokens live in style.css and switch on the `dark` class of <html>.
watch(
  isDark,
  (val) => {
    document.documentElement.classList.toggle('dark', val)
    try {
      localStorage.setItem('theme', val ? 'dark' : 'light')
    } catch {
      /* storage unavailable — theme just won't persist */
    }
  },
  { immediate: true }
)

function toggleTheme() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="min-h-screen bg-bg text-fg transition-colors duration-500">
    <NavBar :isDark="isDark" @toggleTheme="toggleTheme" />
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <FooterBar />
  </div>
</template>