<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <div class="reveal mb-12 md:mb-16 flex items-center gap-4">
    <span class="w-10 h-px bg-accent shrink-0"></span>
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase text-fg">
      {{ title }}
    </h2>
  </div>
</template>