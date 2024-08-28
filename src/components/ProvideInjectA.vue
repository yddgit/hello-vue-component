<script setup>
import ProvideInjectB from './ProvideInjectB.vue'
import { ref, provide, readonly } from 'vue'

provide('messageFromSFC', 'Message from ProvideInjectA.vue')

// 尽可能将任何对响应式状态的变更都保持在供给方组件中
const countFromSFC = ref(0)
const updateCountFromSFC = () => countFromSFC.value++
provide('countFromSFC', {
    countFromSFC,
    // 提供一个更改数据的函数
    updateCountFromSFC
})

// 如果想确保数据不能被注入方修改, 可以用readonly()包装一下提供的值
const location = ref('North Pole')
provide('location', readonly(location))

</script>
<template>
    <ProvideInjectB />
</template>