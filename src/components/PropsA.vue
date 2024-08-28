<script setup>
// 字符串数组定义
//const props = defineProps(['msg'])
// 对象形式定义
const props = defineProps({
    msg: String,
    title: String,
    likes: Number,
})
</script>
<template>
    <div>
        <h4>Props:</h4>
        <ul>
            <li v-for="(value, name) in props" :key="name">{{ name }}: {{ value }}</li>
        </ul>
    </div>
</template>