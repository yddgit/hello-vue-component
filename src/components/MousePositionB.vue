<script setup>
import { useMouse } from './mouseB'
const { x, y } = useMouse()
</script>
<template>
    <div>组合函数 Mouse position: {{ x }}, {{ y }}</div>
</template>