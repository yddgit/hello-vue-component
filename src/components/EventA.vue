<script setup>
defineEmits(['increaseBy'])
</script>
<template>
    <!-- 所有传入$emit的额外参数都会被直接传入监听器 -->
    <button @click="$emit('increaseBy', 1)">Increase by 1</button><br/>
</template>