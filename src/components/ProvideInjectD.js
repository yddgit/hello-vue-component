import { provide, ref, readonly } from 'vue'
import ProvideInjectB from './ProvideInjectB.vue'

export default {
    components: {
        ProvideInjectB
    },
    setup() {
        provide('messageFromJs', 'Message from ProvideInjectD');
        const location = ref('North Pole')
        provide('location', readonly(location))
        return { }
    },
    template: `
        <ProvideInjectB />
    `
}