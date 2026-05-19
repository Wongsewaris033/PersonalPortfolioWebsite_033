<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({ isDark: Boolean })

const visible = ref(false)
const sectionRef = ref(null)

let observer = null
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.15 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())

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
  'Researching User Pain Points'
  ]
</script>

<template>
  <section id="about" ref="sectionRef" class="py-28 md:py-36">
    <div class="max-w-7xl mx-auto px-10">

      <!-- Section header -->
      <div :class="['flex items-center gap-4 mb-20 transition-all duration-700', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6']">
        <span class="w-10 h-px bg-rose-400"></span>
        <span :class="['text-xs tracking-widest uppercase font-medium', isDark ? 'text-rose-400' : 'text-rose-500']">About Me</span>
      </div>

      <!-- Grid layout -->
      <div class="grid lg:grid-cols-12 gap-16 items-start">

        <!-- Left: Stats + Headline -->
        <div class="lg:col-span-4">
          <h2
            :class="[
              'font-light leading-tight mb-8 transition-all duration-700 delay-100',
              isDark ? 'text-zinc-100' : 'text-zinc-900',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            ]"
            style="font-size: clamp(2rem, 3.5vw, 3rem);"
          >
            Designing for<br /><span class="font-semibold">People, Not Systems</span>
          </h2>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-3 mb-10">
            <div
              v-for="(fact, i) in facts"
              :key="i"
              :class="[
                'p-4 rounded-sm border transition-all duration-700',
                isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-200 bg-white shadow-sm',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              ]"
              :style="{ transitionDelay: `${200 + i * 80}ms` }"
            >
              <div :class="['text-2xl font-semibold', isDark ? 'text-zinc-100' : 'text-zinc-900']">{{ fact.value }}</div>
              <div :class="['text-[10px] tracking-wide uppercase mt-1 leading-snug', isDark ? 'text-zinc-500' : 'text-zinc-500']">{{ fact.label }}</div>
            </div>
          </div>

          <!-- Personal Interests -->
          <div
            :class="['transition-all duration-700 delay-300', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']"
          >
            <div :class="['text-[10px] tracking-widest uppercase font-medium mb-3', isDark ? 'text-zinc-500' : 'text-zinc-500']">Personal Interests</div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="interest in interests"
                :key="interest"
                :class="[
                  'px-3 py-1.5 text-xs rounded-sm border font-medium',
                  isDark ? 'border-zinc-700 text-zinc-400' : 'border-zinc-200 text-zinc-600 bg-white'
                ]"
              >{{ interest }}</span>
            </div>
          </div>
        </div>

        <!-- Middle: Bio + Education -->
        <div class="lg:col-span-5">
          <!-- Bio -->
          <div :class="['text-[10px] tracking-widest uppercase font-medium mb-3', isDark ? 'text-zinc-500' : 'text-zinc-500']">Biography</div>
          <p
            :class="[
              'text-base leading-loose mb-5 transition-all duration-700 delay-200',
              isDark ? 'text-zinc-300' : 'text-zinc-700',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            ]"
          >
            I'm Wongsewaris Tumsud (Win), an IT student at King Mongkut's University of Technology Thonburi specialising in
            Information Technology. I'm passionate about UX/UI design — creating digital experiences
            that are intuitive, accessible, and human-centred.
          </p>
          <p
            :class="[
              'text-base leading-loose mb-10 transition-all duration-700 delay-300',
              isDark ? 'text-zinc-400' : 'text-zinc-600',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            ]"
          >
            Before opening Figma, I invest time in user research, journey mapping, and prototype testing
            to ensure every interaction is meaningful. Currently focused on design systems, accessibility
            standards, and integrating AI thoughtfully into design workflows.
          </p>

          <!-- Education -->
          <div :class="['text-[10px] tracking-widest uppercase font-medium mb-4', isDark ? 'text-zinc-500' : 'text-zinc-500']">Education</div>
          <div
            :class="[
              'p-5 rounded-sm border transition-all duration-700 delay-400',
              isDark ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-white shadow-sm',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            ]"
          >
            <div :class="['text-xs tracking-widest uppercase mb-1', isDark ? 'text-rose-400' : 'text-rose-500']">2024 – Present</div>
            <div :class="['text-base font-semibold', isDark ? 'text-zinc-100' : 'text-zinc-900']">Bachelor of School of Information Technology</div>
            <div :class="['text-sm mt-1', isDark ? 'text-zinc-400' : 'text-zinc-600']">King Mongkut's University of Technology Thonburi (KMUTT), Bangkok</div>
            <div :class="['text-xs mt-2', isDark ? 'text-zinc-500' : 'text-zinc-500']">Specialisation: UX/UI Design</div>
          </div>
        </div>

        <!-- Right: Career Goals + Toolbox -->
        <div
          :class="[
            'lg:col-span-3 transition-all duration-700 delay-300',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          ]"
        >
          <!-- Career Goals -->
          <div :class="['text-[10px] tracking-widest uppercase font-medium mb-3', isDark ? 'text-zinc-500' : 'text-zinc-500']">Career Goals</div>
          <p :class="['text-sm leading-relaxed mb-8', isDark ? 'text-zinc-400' : 'text-zinc-600']">
            Aspiring to become a UX Researcher at a product-driven company where I can understand user behavior, uncover insights, and help create meaningful 
            and user-centered digital experiences. Currently seeking a co-op or internship opportunity in the IT industry.
          </p>

          <!-- Toolbox -->
          <div :class="['text-[10px] tracking-widest uppercase font-medium mb-4', isDark ? 'text-zinc-500' : 'text-zinc-500']">Toolbox</div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tool in [
                'Figma', 
                'FigJam', 
                'Wireframing', 
                'Prototyping', 
                'User Flow', 
                'User Research', 
                'Usability Testing', 
                'Design Systems', 
                'Information Architecture', 
                'Accessibility Design', 
                'Notion', 
                'GitHub', 
                'VS Code', 
                'Vue.js', 
                'Tailwind CSS',
                'HTML', 
                'CSS', 
                'JavaScript'
                ]"
              :key="tool"
              :class="[
                'px-3 py-2 text-xs rounded-sm border font-medium',
                isDark ? 'border-zinc-700 text-zinc-300' : 'border-zinc-300 text-zinc-700 bg-white'
              ]"
            >{{ tool }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>