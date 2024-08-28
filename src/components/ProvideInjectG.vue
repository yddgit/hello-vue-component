<script setup>
import { inject } from 'vue'
import { injectionKey } from './ProvideInjectKey'

const injected = inject(injectionKey)

</script>
<template>
    <ul>
        <li v-for="(value, name) in injected" :key="name">{{ name }}: {{ value }}</li>
    </ul>
</template>