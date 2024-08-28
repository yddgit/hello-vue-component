<script setup>
import { useMouse } from './mouseC'
const { x, y } = useMouse()
</script>
<template>
    <div>函数嵌套 Mouse position: {{ x }}, {{ y }}</div>
</template>