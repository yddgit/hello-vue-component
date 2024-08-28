<script setup>
// emits对事件的参数进行验证
const emit = defineEmits({
    click: null, // 没有检验
    // 校验submit事件, 校验不过会在开发模式下显示警告, 不会影响内容渲染
    submit({ email, password }) {
        if(email && password) {
            return true
        } else {
            console.warn('Invalid submit event payload!')
            return false
        }
    }
})

function submitForm(email, password) {
    emit('submit', { email, password })
}
</script>
<template>
    <button @click="submitForm(null, '123456')">Submit</button><br/>
</template>