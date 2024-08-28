<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: String,
    modelModifiers: { default: () => ({}) }, // xxxModifiers可以接收到xxx属性的修饰符
    title: String,
    titleModifiers: { default: () => ({}) } // 属性名 + Modifiers可以接收到属性的修饰符
})

const emit = defineEmits(['update:modelValue', 'update:title'])

console.log(props.modelModifiers) // { capitalize: true }
console.log(props.titleModifiers) // { uppercase: true }

const emitValue = (e) => {
    let value = e.target.value
    if(props.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
}

const titleValue = computed({
    get() {
        return props.title
    },
    set(value) {
        if(props.titleModifiers.uppercase) {
            value = value.toUpperCase()
        }
        emit('update:title', value)
    }
})

</script>
<template>
    <div>
        <input type="text" :value="modelValue" @input="emitValue" /> {{ modelValue }}<br/>
        <input v-model="titleValue" /> {{ titleValue }}<br/>
    </div>
</template>