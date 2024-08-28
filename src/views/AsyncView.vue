<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncA = defineAsyncComponent(() => import('../components/AsyncA.vue'))
const AsyncB = defineAsyncComponent({
    loader: () => import('../components/AsyncB.vue'),
    // 加载时显示的组件
    loadingComponent: {
        template: '<div>Loading...</div>'
    },
    // 加载失败或超时时显示的组件
    errorComponent: {
        template: '<div>Error!</div>'
    },
    // 展示组件的延迟时间, 默认200ms
    delay: 2000,
    // 超时时间, 默认Infinity
    timeout: 3000
})
</script>
<template>
    <div>
        <AsyncA/>
        <AsyncB/>
    </div>
</template>