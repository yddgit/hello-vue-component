<script setup>
import { computed } from 'vue'

// 默认的v-model在组件上都是使用modelValue作为prop, 以update:modelValue作为对应的事件名

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

// 另一种方式: 使用一个可写的具有getter/setter的computed属性
const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

</script>
<template>
    <div>
        <!-- 将内部原生<input>元素的value属性绑定到modelValue上, 当原生input事件触发时，触发一个携带了新值的update:modelValue的自定义事件 -->
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> {{ modelValue }} <br/>
        <input v-model="value" /> {{ value }}
    </div>
</template>