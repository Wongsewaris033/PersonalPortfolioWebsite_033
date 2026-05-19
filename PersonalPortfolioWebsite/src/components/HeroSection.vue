<script setup>
import { ref, onMounted } from 'vue'

defineProps({ isDark: Boolean })

const visible = ref(false)
onMounted(() => setTimeout(() => (visible.value = true), 100))

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center relative overflow-hidden">

    <!-- Background grid -->
    <div
      class="absolute inset-0"
      :style="{
        backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }"
    ></div>

    <!-- Accent blobs -->
    <div class="absolute top-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse-slow"
      :class="isDark ? 'bg-rose-500' : 'bg-rose-300'"></div>
    <div class="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 animate-pulse-slow"
      :class="isDark ? 'bg-indigo-500' : 'bg-indigo-300'" style="animation-delay:2s"></div>

    <div class="max-w-7xl mx-auto px-10 py-32 w-full">
      <div class="grid lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7">
          <!-- Tag line -->
          <div
            :class="[
              'inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium mb-8 transition-all duration-700',
              isDark ? 'text-rose-400' : 'text-rose-500',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            ]"
          >
            <span class="w-10 h-px bg-current"></span>
            UX Researcher
          </div>

          <!-- Name -->
          <h1
            :class="[
              'font-light leading-[1.05] mb-6 transition-all duration-700 delay-100',
              isDark ? 'text-zinc-100' : 'text-zinc-900',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            ]"
            style="font-size: clamp(3rem, 5.5vw, 5rem);"
          >
            Wongsewaris<br />
            <span class="font-semibold">Tumsud</span>
          </h1>

          <!-- Tagline -->
          <p
            :class="[
              'text-lg leading-relaxed mb-4 max-w-xl transition-all duration-700 delay-200',
              isDark ? 'text-zinc-300' : 'text-zinc-700',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            ]"
          >
            Designing experiences that put real people first —
            from <span :class="isDark ? 'text-zinc-100 font-medium' : 'text-zinc-900 font-semibold'">research</span> to
            <span :class="isDark ? 'text-zinc-100 font-medium' : 'text-zinc-900 font-semibold'">high-fidelity prototype</span>.
          </p>
          <p
            :class="[
              'text-sm leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-[250ms]',
              isDark ? 'text-zinc-500' : 'text-zinc-500',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            ]"
          >
            Passionate about design systems, accessibility, and the intersection of AI and human-centred design.
          </p>

          <!-- CTA Buttons -->
          <div
            :class="[
              'flex items-center gap-5 mb-16 transition-all duration-700 delay-300',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            ]"
          >
            <button
              @click="scrollTo('work')"
              class="px-8 py-3.5 text-xs tracking-widest uppercase font-semibold bg-rose-500 text-white rounded-sm hover:bg-rose-600 active:scale-95 transition-all duration-200"
            >
              View My Work
            </button>
            <button
              @click="scrollTo('contact')"
              :class="[
                'px-8 py-3.5 text-xs tracking-widest uppercase font-semibold rounded-sm border active:scale-95 transition-all duration-200',
                isDark ? 'border-zinc-700 text-zinc-300 hover:border-zinc-400 hover:text-zinc-100' : 'border-zinc-300 text-zinc-600 hover:border-zinc-700 hover:text-zinc-900'
              ]"
            >
              Get in Touch
            </button>
          </div>

          <!-- Mini stats row -->
          <div
            :class="[
              'flex items-center gap-10 transition-all duration-700 delay-[350ms]',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            ]"
          >
            <div v-for="(s, i) in [{ v: '2+', l: 'Years Exp.' }, { v: '3', l: 'Projects' }, { v: '100%', l: 'Satisfaction' }]" :key="i">
              <div :class="['text-2xl font-semibold', isDark ? 'text-zinc-100' : 'text-zinc-900']">
                {{ s.v }}
              </div>
              <div :class="['text-[10px] tracking-widest uppercase mt-0.5', isDark ? 'text-zinc-500' : 'text-zinc-500']">{{ s.l }}</div>
            </div>
          </div>
        </div>

        <!-- Image Side -->
        <div
          :class="[
            'lg:col-span-5 flex justify-center lg:justify-end transition-all duration-700 delay-400',
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          ]"
        >
          <div class="relative">
            <div class="absolute -top-4 -right-4 w-full h-full rounded-sm border-2 border-rose-400/25"></div>
            <div class="absolute -top-8 -right-8 w-full h-full rounded-sm border border-rose-400/10"></div>
            <img
              src="@/assets/WinIMG.JPG"
              alt="Wongsewaris Tumsud"
              class="w-80 h-96 lg:w-96 lg:h-[28rem] object-cover rounded-sm relative z-10 hover:grayscale transition-all duration-700"
            />
            <div
              :class="[
                'absolute -bottom-5 -left-5 z-20 px-5 py-3 rounded-sm text-xs tracking-widest uppercase font-semibold shadow-lg',
                isDark ? 'bg-zinc-900 border border-zinc-700 text-zinc-300' : 'bg-white border border-zinc-300 text-zinc-700 shadow-zinc-200/60'
              ]"
            >
              UX Researcher
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>