<script setup>
import { toolbox } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const { visible, sectionRef } = useReveal()

const stats = [
  { v: '2+', l: 'Years Exp.' },
  { v: '3', l: 'Projects' },
]

// Decorative skill ticker: the toolbox list twice so the loop is seamless
const marqueeItems = [...toolbox, ...toolbox]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    ref="sectionRef"
    :class="['relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24', { 'is-visible': visible }]"
  >
    <!-- Soft accent glow -->
    <div class="pointer-events-none absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl bg-accent opacity-10 animate-pulse-slow"></div>

    <div class="page-container relative">
      <!-- Tag line -->
      <div class="reveal inline-flex items-center gap-3 px-4 py-2 rounded-full border border-line bg-surface text-[11px] tracking-widest uppercase font-medium text-fg-2 mb-8">
        <span class="relative flex w-2 h-2">
          <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping"></span>
          <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
        </span>
        UX/UI Designer
      </div>

      <!-- Name -->
      <h1
        class="reveal font-light uppercase leading-[0.95] tracking-tight text-fg mb-12 md:mb-16"
        style="font-size: clamp(2.25rem, 11vw, 8rem); --d: 100ms"
      >
        Wongsewaris<br />
        <span class="font-semibold">Tumsud</span>
      </h1>

      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div class="lg:col-span-7">
          <!-- Tagline -->
          <p class="reveal text-xl md:text-2xl leading-relaxed mb-5 max-w-xl text-fg-2" style="--d: 200ms">
            Designing experiences that put real people first —
            from <span class="text-fg font-semibold">research</span> to
            <span class="text-fg font-semibold">high-fidelity prototype</span>.
          </p>
          <p class="reveal text-sm leading-relaxed mb-10 max-w-lg text-muted" style="--d: 250ms">
            Passionate about design systems, accessibility, and the intersection of AI and human-centred design.
          </p>

          <!-- CTA buttons -->
          <div class="reveal flex flex-wrap items-center gap-4 mb-12" style="--d: 300ms">
            <button
              @click="scrollTo('work')"
              class="px-8 py-3.5 text-xs tracking-widest uppercase font-semibold bg-accent-solid text-white rounded-full hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              View My Work
            </button>
            <button
              @click="scrollTo('contact')"
              class="px-8 py-3.5 text-xs tracking-widest uppercase font-semibold rounded-full border border-line text-fg-2 hover:border-fg hover:text-fg hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>

          <!-- Mini stats -->
          <div class="reveal flex items-center gap-8 sm:gap-12" style="--d: 350ms">
            <div v-for="s in stats" :key="s.l">
              <div class="text-2xl md:text-3xl font-semibold text-fg">{{ s.v }}</div>
              <div class="eyebrow mt-1">{{ s.l }}</div>
            </div>
          </div>
        </div>

        <!-- Portrait -->
        <div class="reveal lg:col-span-5 flex justify-center lg:justify-end" style="--d: 400ms">
          <div class="relative w-full max-w-sm lg:max-w-none">
            <div class="aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-surface-2">
              <img
                src="@/assets/WinProfile.JPEG"
                alt="Wongsewaris Tumsud"
                class="w-full h-full object-cover hover:grayscale hover:scale-105 transition-all duration-700"
              />
            </div>
            <div class="absolute -bottom-4 left-6 px-5 py-3 rounded-full bg-surface border border-line text-[11px] tracking-widest uppercase font-semibold text-fg-2 shadow-lg shadow-black/10">
              UX/UI Designer
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skill ticker (decorative; the same skills are listed in About → Toolbox) -->
    <div
      class="marquee reveal relative mt-20 md:mt-24 overflow-hidden"
      style="--d: 500ms; mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)"
      aria-hidden="true"
    >
      <div class="marquee-track">
        <span
          v-for="(item, i) in marqueeItems"
          :key="i"
          class="mx-1.5 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-line bg-surface text-sm text-fg-2 whitespace-nowrap"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>{{ item }}
        </span>
      </div>
    </div>
  </section>
</template>