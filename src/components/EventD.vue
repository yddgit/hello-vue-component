<script setup>
// emits还支持对象语法, 允许对事件的参数进行验证
defineEmits({
    submit() {
        console.log('Event param: ', arguments)
        // 通过返回true/false来判断验证是否通过
        return true
    }
})
</script>
<template>
    <button @click="$emit('submit', 1, 'Hello', ['A', 'B', 'C'], { a: 'b', c: 'd' })">Submit</button><br/>
</template>