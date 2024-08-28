<script setup>
import { ref, provide } from 'vue'
import { injectionKey } from './ProvideInjectKey'
import ProvideInjectG from './ProvideInjectG.vue'

const c = ref('C')
const updateC = (value) => c.value = value
provide(injectionKey, {
    a: ref('A'),
    b: ref(0),
    c: {
        c,
        updateC
    }
})
</script>
<template>
    <ProvideInjectG />
</template>