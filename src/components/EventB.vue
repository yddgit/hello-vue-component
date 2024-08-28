<script setup>
// $emit方法不能在组件的script中使用, defineEmits会返回一个作用相同的函数供我们使用
const emit = defineEmits(['inFocus', 'submit'])

function buttonClick() {
    console.log('EventB: Submitted!')
    emit('submit')
}
</script>
<template>
    <button @click="buttonClick">Submit</button><br/>
</template>