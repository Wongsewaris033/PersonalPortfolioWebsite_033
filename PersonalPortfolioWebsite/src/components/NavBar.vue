<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from '@/data/site'

defineProps({
  isDark: Boolean,
})

const emit = defineEmits(['toggleTheme'])

const scrolled = ref(false)
const menuOpen = ref(false)
const active = ref('')

// Highlight the link of the section currently under the top of the viewport
function handleScroll() {
  scrolled.value = window.scrollY > 40
  const line = window.innerHeight * 0.35
  let current = ''
  for (const id of navItems) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= line) current = id
  }
  active.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  menuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
    <nav
      aria-label="Main"
      :class="[
        'w-full max-w-3xl rounded-3xl border transition-all duration-500',
        scrolled || menuOpen
          ? 'bg-surface/85 backdrop-blur-xl border-line shadow-lg shadow-black/5'
          : 'bg-transparent border-transparent'
      ]"
    >
      <div class="flex items-center justify-between pl-5 pr-3 py-2.5">
        <!-- Logo -->
        <button
          @click="scrollTo('hero')"
          class="font-mono text-sm tracking-widest font-semibold opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Back to top"
        >
          <span class="text-fg">WT</span><span class="text-accent">.</span>
        </button>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-1">
          <button
            v-for="item in navItems"
            :key="item"
            @click="scrollTo(item)"
            :aria-current="active === item ? 'true' : undefined"
            :class="[
              'px-3.5 py-2 rounded-full text-[11px] tracking-widest uppercase font-medium transition-colors',
              active === item ? 'bg-surface-2 text-fg' : 'text-muted hover:text-fg'
            ]"
          >
            {{ item }}
          </button>

          <!-- Dark/Light toggle -->
          <button
            @click="emit('toggleTheme')"
            class="ml-2 text-[11px] tracking-widest uppercase font-medium px-3.5 py-2 rounded-full border border-line text-muted hover:text-fg hover:border-muted transition-colors"
          >
            {{ isDark ? '☀️ Light' : '🌙 Dark' }}
          </button>
        </div>

        <!-- Mobile: theme toggle + hamburger -->
        <div class="md:hidden flex items-center gap-2">
          <button
            @click="emit('toggleTheme')"
            class="text-xs px-3 py-2 rounded-full border border-line text-muted hover:text-fg transition-colors"
            :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          >
            {{ isDark ? '☀️' : '🌙' }}
          </button>

          <button
            @click="menuOpen = !menuOpen"
            class="p-3 text-fg"
            :aria-expanded="menuOpen"
            aria-label="Toggle menu"
          >
            <div class="w-5 flex flex-col gap-1">
              <span :class="['block h-px bg-fg transition-all duration-300', menuOpen ? 'rotate-45 translate-y-[5px]' : '']"></span>
              <span :class="['block h-px bg-fg transition-all duration-300', menuOpen ? 'opacity-0' : '']"></span>
              <span :class="['block h-px bg-fg transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-[5px]' : '']"></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div :class="['md:hidden overflow-hidden transition-all duration-300', menuOpen ? 'max-h-72' : 'max-h-0']">
        <div class="px-5 pb-4 pt-1 flex flex-col gap-1 border-t border-line">
          <button
            v-for="item in navItems"
            :key="item"
            @click="scrollTo(item)"
            :tabindex="menuOpen ? 0 : -1"
            :class="[
              'text-xs tracking-widest uppercase font-medium text-left py-3 transition-colors',
              active === item ? 'text-accent-fg' : 'text-muted hover:text-fg'
            ]"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>