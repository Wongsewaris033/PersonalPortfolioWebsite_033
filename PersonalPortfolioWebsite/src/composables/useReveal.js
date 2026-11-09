import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Adds a one-time "reveal on scroll" flag to a section.
 * Bind `sectionRef` to the <section> and `:class="{ 'is-visible': visible }"`;
 * any child with the `.reveal` class (see style.css) then animates in.
 */
export function useReveal() {
  const visible = ref(false)
  const sectionRef = ref(null)
  let observer = null

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') {
      visible.value = true
      return
    }
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { visible, sectionRef }
}