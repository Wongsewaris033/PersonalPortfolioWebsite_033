<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isDark: Boolean
})

const emit = defineEmits(['toggleTheme'])

const scrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  menuOpen.value = false
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled
        ? isDark
          ? 'bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-white/95 backdrop-blur-md shadow-sm shadow-zinc-200/80 border-b border-zinc-200/60'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
      <!-- Logo -->
      <button @click="scrollTo('hero')" class="font-mono text-sm tracking-widest font-semibold opacity-80 hover:opacity-100 transition-opacity">
        <span :class="isDark ? 'text-zinc-100' : 'text-zinc-900'">WT</span>
        <span class="text-rose-400">.</span>
      </button>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-10">
        <button
          v-for="item in ['about', 'work', 'skills', 'experience', 'contact']"
          :key="item"
          @click="scrollTo(item)"
          :class="[
            'text-xs tracking-widest uppercase font-medium transition-colors',
            isDark ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900 font-semibold'
          ]"
        >
          {{ item }}
        </button>

        <!-- Dark/Light Toggle -->
        <!-- Dark/Light Toggle -->
        <button
          @click="emit('toggleTheme')"
          :class="[
            'text-xs tracking-widest uppercase font-medium px-3 py-1.5 rounded border transition-colors',
            isDark
              ? 'border-zinc-600 text-zinc-400 hover:text-zinc-100 hover:border-zinc-400'
              : 'border-zinc-300 text-zinc-600 hover:text-zinc-900 hover:border-zinc-500'
          ]"
        >
          {{ isDark ? '☀️ Light' : '🌙 Dark' }}
        </button>
      </div>

      <!-- Mobile: Theme Toggle + Hamburger -->
      <div class="md:hidden flex items-center gap-3">
        <!-- Dark/Light Toggle (always visible on mobile) -->
        <button
          @click="emit('toggleTheme')"
          :class="[
            'text-xs tracking-widest uppercase font-medium px-3 py-1.5 rounded border transition-colors',
            isDark
              ? 'border-zinc-600 text-zinc-400 hover:text-zinc-100 hover:border-zinc-400'
              : 'border-zinc-300 text-zinc-600 hover:text-zinc-900 hover:border-zinc-500'
          ]"
        >
          {{ isDark ? '☀️' : '🌙' }}
        </button>

        <!-- Hamburger Button -->
        <button @click="menuOpen = !menuOpen" class="p-1" :class="isDark ? 'text-zinc-100' : 'text-zinc-900'">
          <div class="w-5 flex flex-col gap-1">
            <span :class="['block h-px transition-all duration-300', isDark ? 'bg-zinc-100' : 'bg-zinc-900', menuOpen ? 'rotate-45 translate-y-1.5' : '']"></span>
            <span :class="['block h-px transition-all duration-300', isDark ? 'bg-zinc-100' : 'bg-zinc-900', menuOpen ? 'opacity-0' : '']"></span>
            <span :class="['block h-px transition-all duration-300', isDark ? 'bg-zinc-100' : 'bg-zinc-900', menuOpen ? '-rotate-45 -translate-y-1.5' : '']"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div :class="['md:hidden overflow-hidden transition-all duration-300', menuOpen ? 'max-h-60' : 'max-h-0']">
      <div :class="['px-10 pb-4 flex flex-col gap-4', isDark ? 'bg-zinc-950/95' : 'bg-white border-b border-zinc-200']">
        <button
          v-for="item in ['about', 'work', 'skills', 'experience', 'contact']"
          :key="item"
          @click="scrollTo(item)"
          :class="['text-xs tracking-widest uppercase font-medium text-left', isDark ? 'text-zinc-400' : 'text-zinc-500']"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </nav>
</template>