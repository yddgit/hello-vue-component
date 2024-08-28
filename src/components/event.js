import { onMounted, onUnmounted } from 'vue'

export function useEventListener(event, handler, element = window) {
  onMounted(() => {
    element.addEventListener(event, handler)
  })

  onUnmounted(() => {
    element.removeEventListener(event, handler)
  })
}