<script setup>
import cookify from '@/assets/cookify.png'
import integratedProj from '@/assets/integrated.png'
import visualMemoryTest from '@/assets/visualMemory.png'
import { useReveal } from '@/composables/useReveal'
import SectionHeader from './SectionHeader.vue'

const { visible, sectionRef } = useReveal()

const projects = [
  {
    number: '01',
    title: 'IT-BANGMOD-INTEGRATED-PROJECT-2025',
    category: 'Course Registration Website',
    desc: 'Developed a course registration website for IT students at King Mongkuts University of Technology Thonburi, focusing on improving the course enrollment experience through clear navigation, responsive design, and user-friendly interfaces.',
    role: 'Frontend Developer, Database Developer & DevOps',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Docker', 'Prisma'],
    tags: ['Full-stack Collaboration', 'Responsive UI', 'DevOps', 'Database Management', 'Web Application'],
    img: integratedProj,
    github: 'https://github.com/IT-BANGMOD-INTEGRATED-PROJECT-2025/intproj25-KK3',
    figma: '',
  },
  {
    number: '02',
    title: 'Cookify Website',
    category: 'Cooking Website',
    desc: 'Designed a recipe discovery website for users of all ages, focusing on intuitive navigation, accessible layouts, and an enjoyable browsing experience across different devices.',
    role: 'UX/UI Designer & Frontend Developer',
    technologies: ['Figma', 'Vue.js', 'Tailwind CSS', 'JavaScript'],
    tags: ['User Research', 'Responsive Design', 'Design System', 'Accessibility', 'Interaction Design'],
    img: cookify,
    github: 'https://github.com/PANHAN220/INT250-G07-Cookify',
    figma: 'https://www.figma.com/design/b8PvEazFjE6rRGiV1Ubh8F/Cookify?node-id=0-1&t=p9esXE8iJb8ckEyo-1',
  },
  {
    number: '03',
    title: 'Visual Memory Test',
    category: 'Visual Memory Test',
    desc: 'Designed and developed a visual memory training web application for children, focusing on interactive gameplay, accessible interfaces, and engaging user experiences to support cognitive skill development across different devices.',
    role: 'UX/UI Designer & Frontend Developer',
    technologies: ['Figma', 'FigJam', 'Vue.js', 'Tailwind CSS', 'JavaScript'],
    tags: ['Interaction Design', 'Game UI', 'Cognitive UX', 'Accessibility', 'Responsive Design'],
    img: visualMemoryTest,
    github: 'https://github.com/PANHAN220/INT250-G07-Visual-Memory-Test',
    figma: 'https://www.figma.com/design/TKfLvSmtAuxLdxkPB270je/Human-Benchmark-Memory?node-id=0-1&t=otfEjFc7dIufYCdV-1',
  },
]
</script>

<template>
  <section id="work" ref="sectionRef" :class="['py-20 md:py-28', { 'is-visible': visible }]">
    <div class="page-container">
      <SectionHeader title="Projects" />

      <div class="flex flex-col gap-5 md:gap-6">
        <article
          v-for="(project, i) in projects"
          :key="project.number"
          class="reveal group card card-hover relative overflow-hidden"
          :style="{ '--d': `${i * 120}ms` }"
        >
          <div class="grid lg:grid-cols-12 gap-6 lg:gap-10 p-6 md:p-8">

            <!-- Preview image -->
            <div class="lg:col-span-4">
              <div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2 border border-line">
                <img
                  :src="project.img"
                  :alt="project.title"
                  class="w-full h-full object-contain lg:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-bg/80 backdrop-blur text-fg font-mono text-xs">{{ project.number }}</span>
              </div>
            </div>

            <!-- Content -->
            <div class="lg:col-span-8 flex flex-col">
              <div>
                <div class="eyebrow mb-2">{{ project.category }}</div>
                <h3 class="text-xl md:text-2xl font-semibold text-fg break-words">{{ project.title }}</h3>
              </div>

              <p class="text-sm md:text-base leading-relaxed mt-4 mb-3 text-fg-2">{{ project.desc }}</p>
              <p class="text-xs leading-relaxed italic text-muted mb-5">
                <span class="not-italic font-semibold text-fg-2">My Role:</span> {{ project.role }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[11px] tracking-wide px-3 py-1.5 rounded-full font-medium bg-rose-50 text-rose-700 border border-rose-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"
                >{{ tag }}</span>
              </div>

              <!-- Action buttons -->
              <div class="flex flex-wrap gap-3 mb-6">
                <a
                  v-if="project.figma"
                  :href="project.figma"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Open ${project.title} on Figma`"
                  class="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-accent-solid border border-accent-solid text-white hover:opacity-90 transition-opacity duration-300"
                >Figma</a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Open ${project.title} on GitHub`"
                  :class="[
                    'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300',
                    project.figma
                      ? 'border border-line text-fg-2 hover:bg-surface-2 hover:text-fg'
                      : 'bg-accent-solid border border-accent-solid text-white hover:opacity-90'
                  ]"
                >GitHub</a>
              </div>

              <!-- Technologies -->
              <div class="mt-auto pt-5 border-t border-line flex items-center gap-2.5 flex-wrap">
                <span class="eyebrow shrink-0 mr-1">Built with</span>
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-[11px] tracking-wide px-2.5 py-1 rounded-md font-mono border border-line text-fg-2 bg-surface-2"
                >{{ tech }}</span>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>
  </section>
</template>