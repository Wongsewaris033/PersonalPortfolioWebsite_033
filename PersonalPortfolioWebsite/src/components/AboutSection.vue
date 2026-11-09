<script setup>
import { toolbox } from '@/data/site'
import { useReveal } from '@/composables/useReveal'
import SectionHeader from './SectionHeader.vue'

const { visible, sectionRef } = useReveal()

const facts = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Projects Completed', value: '3' },
]

const interests = [
  'UI/UX Design',
  'Photography',
  'Coffee Brewing',
  'Reading UX Books',
  'Human-Centered Design',
  'Design Thinking',
  'User Behavior & Psychology',
  'Digital Product Research',
  'Researching User Pain Points',
]
</script>

<template>
  <section id="about" ref="sectionRef" :class="['py-20 md:py-28', { 'is-visible': visible }]">
    <div class="page-container">
      <SectionHeader title="About Me" />

      <!-- Bento grid -->
      <div class="grid lg:grid-cols-12 gap-4 md:gap-5">

        <!-- Biography -->
        <div class="reveal card lg:col-span-8 p-7 md:p-10" style="--d: 100ms">
          <div class="eyebrow mb-4">Biography</div>
          <h3 class="font-light leading-tight text-fg mb-8" style="font-size: clamp(1.75rem, 3.5vw, 2.75rem)">
            Designing for <span class="font-semibold">People, Not Systems</span>
          </h3>
          <p class="text-base leading-loose mb-5 text-fg-2">
            I'm Wongsewaris Tumsud (Win), an IT student at King Mongkut's University of Technology Thonburi specialising in
            Information Technology. I'm passionate about UX/UI design — creating digital experiences
            that are intuitive, accessible, and human-centred.
          </p>
          <p class="text-base leading-loose text-muted">
            Before opening Figma, I invest time in user research, journey mapping, and prototype testing
            to ensure every interaction is meaningful. Currently focused on design systems, accessibility
            standards, and integrating AI thoughtfully into design workflows.
          </p>
        </div>

        <!-- Stats -->
        <div class="reveal lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5" style="--d: 180ms">
          <div
            v-for="fact in facts"
            :key="fact.label"
            class="card card-hover p-7 flex flex-col justify-center"
          >
            <div class="text-4xl md:text-5xl font-semibold text-fg">{{ fact.value }}</div>
            <div class="eyebrow mt-2 leading-snug">{{ fact.label }}</div>
          </div>
        </div>

        <!-- Education -->
        <div class="reveal card card-hover lg:col-span-4 p-7" style="--d: 120ms">
          <div class="eyebrow mb-5">Education</div>
          <div class="text-[11px] tracking-widest uppercase mb-2 text-accent-fg">2024 – Present</div>
          <div class="text-lg font-semibold text-fg leading-snug">Bachelor of School of Information Technology</div>
          <div class="text-sm mt-2 text-muted">King Mongkut's University of Technology Thonburi (KMUTT), Bangkok</div>
          <div class="text-xs mt-4 text-muted">Specialisation: UX/UI Design</div>
        </div>

        <!-- Career goals -->
        <div class="reveal card card-hover lg:col-span-4 p-7" style="--d: 180ms">
          <div class="eyebrow mb-5">Career Goals</div>
          <p class="text-sm leading-relaxed text-fg-2">
            Aspiring to become a UX Researcher at a product-driven company where I can understand user behavior, uncover insights, and help create meaningful
            and user-centered digital experiences. Currently seeking a co-op or internship opportunity in the IT industry.
          </p>
        </div>

        <!-- Personal interests -->
        <div class="reveal card card-hover lg:col-span-4 p-7" style="--d: 240ms">
          <div class="eyebrow mb-5">Personal Interests</div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="interest in interests"
              :key="interest"
              class="px-3 py-1.5 text-xs rounded-full border border-line text-fg-2 bg-surface-2"
            >{{ interest }}</span>
          </div>
        </div>

        <!-- Toolbox -->
        <div class="reveal card lg:col-span-12 p-7 md:p-8" style="--d: 300ms">
          <div class="eyebrow mb-5">Toolbox</div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tool in toolbox"
              :key="tool"
              class="px-4 py-2 text-xs rounded-full border border-line text-fg-2 font-medium hover:border-accent hover:text-accent-fg transition-colors"
            >{{ tool }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>