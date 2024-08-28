<script setup>
import { inject } from 'vue'
defineProps(['count'])

// inject的第二个参数是默认值，如果没有提供则使用默认值
const messageFromSFC = inject('messageFromSFC', 'Default message if not provided')
const globalMessage = inject('globalMessage')

// 从注入方获取修改数据的函数
const { countFromSFC, updateCountFromSFC } = inject('countFromSFC', {
    countFromSFC: 'No provided',
    updateCountFromSFC: ()=>console.log('No provided')
})

// 从注入方获取的数据是只读的
const location = inject('location')
console.log(location)
if(location) {
    location.value = 'South Pole' // Set operation on key "value" failed: target is readonly
}

</script>
<template>
    <div style="background-color:aqua">
        <h4 v-if="globalMessage">{{ globalMessage }}</h4>
        <div>C count: {{ count }}, message: {{ messageFromSFC }}</div>
        <div>Count from ancestor: {{ countFromSFC }} <button @click="updateCountFromSFC">update</button></div>
        <div>Location from ancestor: {{ location }}</div>
    </div>
</template>