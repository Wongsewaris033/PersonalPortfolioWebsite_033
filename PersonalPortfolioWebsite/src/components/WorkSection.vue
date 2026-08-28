<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import cookify from '@/assets/cookify.png'
import integratedProj from '@/assets/integrated.png'
import visualMemoryTest from '@/assets/visualMemory.png'

defineProps({ isDark: Boolean })

const visible = ref(false)
const sectionRef = ref(null)

let observer = null
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.08 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())

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
    link: 'https://github.com/IT-BANGMOD-INTEGRATED-PROJECT-2025/intproj25-KK3',
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
    link: 'https://github.com/PANHAN220/INT250-G07-Cookify',
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
    link: 'https://github.com/PANHAN220/INT250-G07-Visual-Memory-Test',
  }
]
</script>

<template>
  <section id="work" ref="sectionRef" class="py-28 md:py-36">
    <div class="max-w-7xl mx-auto px-10">

      <!-- Section header -->
      <div :class="['flex items-center justify-between mb-20 transition-all duration-700', visible ? 'opacity-100' : 'opacity-0']">
        <div class="flex items-center gap-4">
          <span class="w-10 h-px bg-rose-400"></span>
          <span :class="['text-xs tracking-widest uppercase font-medium', isDark ? 'text-rose-400' : 'text-rose-500']">Selected Projects</span>
        </div>
      </div>

      <!-- Project List -->
      <div class="flex flex-col gap-8">
        <div
          v-for="(project, i) in projects"
          :key="i"
          :class="[
            'group rounded-sm border overflow-hidden transition-all duration-500',
            isDark
              ? 'border-zinc-800 hover:border-zinc-600 bg-zinc-900/20 hover:bg-zinc-900/50'
              : 'border-zinc-300 hover:border-rose-300 bg-white hover:shadow-lg hover:shadow-rose-50/80',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
          :style="{ transitionDelay: `${i * 120}ms` }"
        >
          <!-- Top row -->
          <div class="grid lg:grid-cols-12 gap-8 p-8">
            <!-- Number + Image -->
            <div class="lg:col-span-2 flex items-start gap-4">
              <span
                :class="['font-mono text-xs mt-1 shrink-0',isDark ? 'text-zinc-600' : 'text-black']">{{ project.number }}</span>

              <div class="flex-1 lg:flex-none flex justify-center lg:justify-start">
                <div class="w-40 h-40 lg:w-35 lg:h-35 rounded-sm overflow-hidden shrink-0">
                  <img
                    :src="project.img"
                    :alt="project.title"
                    class="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="lg:col-span-6">
              <div :class="['text-[10px] tracking-widest uppercase mb-2', isDark ? 'text-zinc-500' : 'text-zinc-600']">{{ project.category }}</div>
              <h3 :class="['text-xl font-semibold mb-3', isDark ? 'text-zinc-100' : 'text-black']">{{ project.title }}</h3>
              <p :class="['text-sm leading-relaxed mb-3', isDark ? 'text-zinc-400' : 'text-zinc-800']">{{ project.desc }}</p>
              <!-- Role -->
              <p :class="['text-xs leading-relaxed italic', isDark ? 'text-zinc-500' : 'text-zinc-600']">
                <span class="not-italic font-semibold">My Role:</span> {{ project.role }}
              </p>
            </div>

            <!-- Tags -->
            <div class="lg:col-span-3 flex flex-wrap lg:flex-col gap-2 content-start">
              <span
                v-for="tag in project.tags"
                :key="tag"
                :class="[
                  'text-[10px] tracking-wide px-3 py-1.5 rounded-sm font-medium',
                  isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-rose-50 text-rose-600 border border-rose-200'
                ]"
              >{{ tag }}</span>
            </div>

            <!-- Arrow -->
            <div class="lg:col-span-1 flex items-center justify-center lg:justify-end">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'text-2xl border-2 rounded-lg px-2 pb-1 transition-all duration-300 group-hover:translate-x-1',
                  isDark ? 'text-rose-400 border-rose-400 lg:text-zinc-700 lg:border-zinc-700 group-hover:text-rose-400 group-hover:border-rose-400 group-hover:bg-rose-50' : 'text-rose-500 group-hover:text-rose-500 bg-slate-200'
                ]"
              >→</a>
            </div>
          </div>

          <!-- Technologies row -->
          <div :class="['px-8 py-4 border-t flex items-center gap-3 flex-wrap', isDark ? 'border-zinc-800 bg-zinc-900/30' : 'border-zinc-100 bg-zinc-50']">
            <span :class="['text-[10px] tracking-widest uppercase shrink-0', isDark ? 'text-zinc-600' : 'text-zinc-600']">Built with</span>
            <span
              v-for="tech in project.technologies"
              :key="tech"
              :class="[
                'text-[10px] tracking-wide px-2.5 py-1 rounded-sm font-mono border',
                isDark ? 'border-zinc-700 text-zinc-400 bg-zinc-800/60' : 'border-zinc-400 text-zinc-700 bg-white'
              ]"
            >{{ tech }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>