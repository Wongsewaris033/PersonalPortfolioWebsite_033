<script setup>
import { useReveal } from '@/composables/useReveal'
import SectionHeader from './SectionHeader.vue'

const { visible, sectionRef } = useReveal()

const experiences = [
  {
    type: 'Coursework',
    period: '2024 – Present',
    title: 'Bachelor of School of Information Technology',
    org: 'King Mongkuts University of Technology Thonburi (KMUTT)',
    desc: 'Relevant coursework: CSS Framework (Vue.js + Tailwind), Web Application Development, Database Systems, UI/UX Design Principles, Human-Computer Interaction.',
    badge: 'Academic',
    badgeColor: 'blue',
  },
  {
    type: 'Academic Activity',
    period: '25-27 April 2026',
    title: 'SIT Camp 2026',
    org: 'School of Information Technology',
    desc: 'Be a group mentor to support and guide camp participants in all aspects of web development, including UX/UI design and frontend development.',
    badge: 'Volunteer',
    badgeColor: 'emerald',
  },
  {
    type: 'Certification',
    period: 'September 2024',
    title: 'Coursera Certifications',
    org: 'Learning How to Learn: Powerful mental tools to help you master tough subjects',
    desc: 'Completed the course Learning How to Learn: Powerful mental tools to help you master tough subjects, gaining effective learning techniques, memory strategies, and problem solving skills for mastering challenging subjects.',
    badge: 'Certificate',
    badgeColor: 'amber',
  },
  {
    type: 'Certification',
    period: 'March 2026',
    title: 'Coursera Certifications',
    org: 'Learn Bootstrap',
    desc: 'Completed a comprehensive course on Bootstrap, learning responsive web design, layout systems, components, and modern frontend development practices.',
    badge: 'Certificate',
    badgeColor: 'amber',
  },
  {
    type: 'Certification',
    period: 'March 2026',
    title: 'Coursera Certifications',
    org: 'Fundamentals of VueJS',
    desc: 'Completed a course on the fundamentals of Vue.js, covering component-based development, reactivity, routing, state management, and building interactive web applications.',
    badge: 'Certificate',
    badgeColor: 'amber',
  },
  {
    type: 'Certification',
    period: 'March 2026',
    title: 'Coursera Certifications',
    org: 'Learn Tailwind CSS',
    desc: 'Completed a course on Tailwind CSS, learning utility-first styling, responsive design, custom layouts, and modern UI development practices.',
    badge: 'Certificate',
    badgeColor: 'amber',
  },
  {
    type: 'Certification',
    period: 'November 2026',
    title: 'Amazon Quick Certifications',
    org: 'Amazon Quick Training Program',
    desc: 'Completed the Amazon Quick training program under the AI FOR ALL HACKATHON 2026, gaining knowledge and practical experience in Amazon Quick, exploring AI-powered tools, data analysis, and the application of AI technology to enhance productivity and support modern business workflows.',
    badge: 'Certificate',
    badgeColor: 'amber',
  },
]

// Badge colours (light, with `dark:` overrides)
const badgePalette = {
  blue: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/40 dark:text-blue-400 dark:border-blue-800',
  rose: 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-900/40 dark:text-rose-400 dark:border-rose-800',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-400 dark:border-emerald-800',
  amber: 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-900/40 dark:text-amber-400 dark:border-amber-800',
}
</script>

<template>
  <section id="experience" ref="sectionRef" :class="['py-20 md:py-28', { 'is-visible': visible }]">
    <div class="page-container">
      <SectionHeader title="Experience & Activities" />

      <!-- Editorial list: period on the left, details on the right -->
      <div class="border-t border-line">
        <article
          v-for="(exp, i) in experiences"
          :key="i"
          class="reveal group grid md:grid-cols-12 gap-3 md:gap-10 py-8 border-b border-line"
          :style="{ '--d': `${i * 80}ms` }"
        >
          <div class="md:col-span-3">
            <div class="eyebrow mb-1">{{ exp.type }}</div>
            <div class="text-sm font-medium text-accent-fg">{{ exp.period }}</div>
          </div>

          <div class="md:col-span-9">
            <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div class="min-w-0">
                <h3 class="text-lg md:text-xl font-semibold text-fg group-hover:text-accent-fg transition-colors">{{ exp.title }}</h3>
                <div class="text-sm mt-1 text-muted">{{ exp.org }}</div>
              </div>
              <span
                :class="['text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full border font-semibold shrink-0', badgePalette[exp.badgeColor]]"
              >{{ exp.badge }}</span>
            </div>
            <p class="text-sm md:text-base leading-relaxed text-fg-2 max-w-3xl">{{ exp.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>