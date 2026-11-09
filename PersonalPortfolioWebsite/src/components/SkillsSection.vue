<script setup>
import { useReveal } from '@/composables/useReveal'
import SectionHeader from './SectionHeader.vue'

const { visible, sectionRef } = useReveal()

// Level badge colours (light, with `dark:` overrides)
const levelColors = {
  Beginner: 'bg-slate-100 text-slate-600 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
  Intermediate: 'bg-sky-100 text-sky-700 border-sky-300 dark:bg-sky-900/60 dark:text-sky-300 dark:border-sky-700',
  Advanced: 'bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-700',
  Expert: 'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-900/50 dark:text-emerald-300 dark:border-emerald-700',
}

const technicalSkills = [
  {
    name: 'User Research',
    level: 'Expert',
    desc: 'Interviews, Surveys, Usability Testing'
  },
  {
    name: 'UI/UX Design (Figma)',
    level: 'Advanced',
    desc: 'Wireframing, Prototyping, Visual Design'
  },
  {
    name: 'Design Systems',
    level: 'Intermediate',
    desc: 'Component Libraries, UI Consistency'
  },
  {
    name: 'Information Architecture',
    level: 'Advanced',
    desc: 'User Flows, Sitemap, Content Structure'
  },
  {
    name: 'Accessibility',
    level: 'Advanced',
    desc: 'Inclusive & Responsive Design'
  },
  {
    name: 'Tailwind CSS',
    level: 'Advanced',
    desc: 'Responsive Design, Utility-first Styling'
  },
  {
    name: 'HTML / CSS / JavaScript',
    level: 'Intermediate',
    desc: 'Semantic HTML, Flexbox, Grid, ES6+'
  },
  {
    name: 'Vue.js',
    level: 'Intermediate',
    desc: 'Components, Routing, Composition API'
  },
]

const softSkills = [
  'Communication',
  'Empathy',
  'Active Listening',
  'Critical Thinking',
  'Problem Solving',
  'Collaboration & Teamwork',
  'Creativity',
  'Adaptability',
  'Time Management',
  'Attention to Detail',
  'User-Centered Thinking',
  'Analytical Thinking',
  'Research Mindset',
]

const process = [
  {
    step: '01',
    title: 'Empathize',
    desc: 'Understand user needs and business goals through interviews, observation, and competitive analysis.'
  },
  {
    step: '02',
    title: 'Define',
    desc: 'Synthesise findings into insights, personas, user journeys, and clear problem statements.'
  },
  {
    step: '03',
    title: 'Ideate',
    desc: 'Generate ideas and explore possible solutions through brainstorming and user flows.'
  },
  {
    step: '04',
    title: 'Prototype',
    desc: 'Create wireframes, interactive prototypes, and scalable design systems to visualise the product experience.'
  },
  {
    step: '05',
    title: 'Test & Iterate',
    desc: 'Conduct usability testing, gather feedback, and continuously refine the experience.'
  },
]
</script>

<template>
  <section id="skills" ref="sectionRef" :class="['py-20 md:py-28', { 'is-visible': visible }]">
    <div class="page-container">
      <SectionHeader title="Skills & Process" />

      <div class="grid lg:grid-cols-12 gap-4 md:gap-5">

        <!-- Left: technical + soft skills -->
        <div class="lg:col-span-7 flex flex-col gap-4 md:gap-5">

          <div class="reveal card p-7 md:p-9" style="--d: 100ms">
            <h3 class="text-2xl font-semibold mb-8 text-fg">Technical Skills</h3>
            <div class="flex flex-col">
              <div
                v-for="(skill, i) in technicalSkills"
                :key="skill.name"
                :class="['py-4', i > 0 ? 'border-t border-line' : 'pt-0']"
              >
                <div class="flex items-center gap-3">
                  <span class="text-sm font-semibold min-w-0 text-fg">{{ skill.name }}</span>
                  <span class="flex-1 min-w-3 border-b border-dashed border-line"></span>
                  <span :class="['text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full border shrink-0', levelColors[skill.level]]">{{ skill.level }}</span>
                </div>
                <div class="text-xs mt-1.5 text-muted">{{ skill.desc }}</div>
              </div>
            </div>
          </div>

          <div class="reveal card p-7 md:p-9" style="--d: 200ms">
            <h3 class="text-xl font-semibold mb-5 text-fg">Soft Skills</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in softSkills"
                :key="skill"
                class="px-4 py-2 text-xs rounded-full border border-line font-medium text-fg-2 bg-surface-2 hover:border-accent hover:text-accent-fg transition-colors"
              >{{ skill }}</span>
            </div>
          </div>

        </div>

        <!-- Right: process -->
        <div class="reveal card lg:col-span-5 p-7 md:p-9" style="--d: 150ms">
          <h3 class="text-2xl font-semibold mb-8 text-fg">My Design Process</h3>
          <div class="flex flex-col">
            <div v-for="(step, i) in process" :key="step.step" class="flex gap-5">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center shrink-0 bg-surface">
                  <span class="text-[10px] font-mono text-accent-fg">{{ step.step }}</span>
                </div>
                <div
                  v-if="i < process.length - 1"
                  class="w-px flex-1 my-1 bg-line"
                  style="min-height: 2rem"
                ></div>
              </div>
              <div class="pb-8">
                <div class="text-base font-semibold mb-1 text-fg">{{ step.title }}</div>
                <div class="text-sm leading-relaxed text-muted">{{ step.desc }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>