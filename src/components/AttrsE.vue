<script setup>
import { useAttrs } from 'vue'
// 使用useAttrs来访问组件所有透传的属性, 但不是响应式的。如果需要响应式的可以用props
const attrs = useAttrs()
console.log(attrs)
</script>
<template>
    <div>header</div>
    <!-- 有多个根节点的组件没有自动透传行为, 如果没有显式绑定会有警告, 如果有显式绑定则不会有警告 -->
    <div v-bind="$attrs">main</div>
    <div>footer</div>
</template>