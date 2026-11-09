<script setup>
import { socialLinks } from '@/data/site'
import { useReveal } from '@/composables/useReveal'
import SectionHeader from './SectionHeader.vue'

const { visible, sectionRef } = useReveal()
</script>

<template>
  <section id="contact" ref="sectionRef" :class="['py-20 md:py-28', { 'is-visible': visible }]">
    <div class="page-container">
      <SectionHeader title="Contact" />

      <div class="reveal card p-8 md:p-14" style="--d: 100ms">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">

          <!-- Headline + message -->
          <div class="lg:col-span-7">
            <h3 class="font-light leading-[1.05] text-fg mb-6" style="font-size: clamp(2.5rem, 6vw, 4.5rem)">
              Let's work<br /><span class="font-semibold">together.</span>
            </h3>
            <p class="text-base leading-relaxed max-w-md text-muted">
              I'm actively seeking internship or co-op opportunities in UX/UI design and frontend development.
              Feel free to reach out, I'd love to connect.
            </p>
          </div>

          <!-- Contact details + social links -->
          <div class="lg:col-span-5 flex flex-col gap-8">
            <div class="flex flex-col">
              <a
                href="mailto:winwin.co.th.well@gmail.com"
                class="group flex items-center gap-4 py-4 border-t border-line"
              >
                <span class="eyebrow w-14 shrink-0">Email</span>
                <span class="text-sm md:text-base text-fg-2 group-hover:text-accent-fg transition-colors break-all">winwin.co.th.well@gmail.com</span>
              </a>
              <a
                href="tel:0964047951"
                class="group flex items-center gap-4 py-4 border-y border-line"
              >
                <span class="eyebrow w-14 shrink-0">Tel</span>
                <span class="text-sm md:text-base text-fg-2 group-hover:text-accent-fg transition-colors">096-404-7951</span>
              </a>
            </div>

            <div>
              <div class="eyebrow mb-3">Find me on</div>
              <div class="flex flex-wrap items-center gap-3">
                <a
                  v-for="s in socialLinks"
                  :key="s.label"
                  :href="s.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-5 py-2.5 text-xs font-semibold rounded-full border border-line text-fg-2 bg-surface hover:border-accent hover:text-accent-fg hover:-translate-y-0.5 transition-all duration-200"
                >{{ s.label }}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>