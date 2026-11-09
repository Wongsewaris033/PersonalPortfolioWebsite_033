<script setup>
import { navItems, socialLinks } from '@/data/site'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="py-12 border-t border-line">
    <div class="page-container">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">

        <!-- Copyright -->
        <span class="font-mono text-xs text-muted">
          Wongsewaris Tumsud<span class="text-accent">.</span>
        </span>

        <!-- Quick links -->
        <nav aria-label="Footer" class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <button
            v-for="item in navItems"
            :key="item"
            @click="scrollTo(item)"
            class="text-[10px] tracking-widest uppercase font-medium text-muted hover:text-fg transition-colors"
          >{{ item }}</button>
        </nav>

        <!-- Social icons -->
        <div class="flex items-center gap-3">
          <a
            v-for="s in socialLinks"
            :key="s.short"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="s.label"
            :title="s.label"
            class="w-10 h-10 rounded-full border border-line flex items-center justify-center text-[10px] font-bold text-fg-2 hover:border-accent hover:text-accent-fg hover:-translate-y-0.5 transition-all duration-200"
          >{{ s.short }}</a>
        </div>

      </div>
    </div>
  </footer>
</template>