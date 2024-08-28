<script setup>
import { computed } from 'vue'
//指定参数和事件名, 可以在单个组件实例上创建多个v-model双向绑定
const props = defineProps(['title', 'firstName', 'lastName'])
const emit = defineEmits(['update:title', 'update:firstName', 'update:lastName'])
const title = computed({
    get() {
        return props.title
    },
    set(value) {
        emit('update:title', value)
    }
})
</script>
<template>
    <div>
        Title: <input type="text" v-model="title" /> {{ title }}<br/>
        First Name: <input type="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)" /> {{ firstName }}<br/>
        Last Name: <input type="text" :value="lastName" @input="$emit('update:lastName', $event.target.value)"/> {{ lastName }}<br/>
    </div>
</template>