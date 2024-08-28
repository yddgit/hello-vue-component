import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    useEventListener('mousemove', (event) => {
        x.value = event.pageX
        y.value = event.pageY
    }, window)
    
    return { x, y }
}