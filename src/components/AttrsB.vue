<script setup>
import AttrsA from '@/components/AttrsA.vue'
</script>
<template>
    <!-- 深层组件继承: 根结节是另外一个组件时, 当前组件会将透传的attribute直接传给AttrsA -->
    <!-- 1. 不包含当前组件声明过的props和emits, 或者说这些props和emits被当前组件消费了 -->
    <!-- 2. 透传的属性如果符合声明, 也可以作为props传入AttrsA -->
    <AttrsA />
</template>