<script setup>
const props = defineProps({
    disabled: [Boolean, Number]
})
</script>
<template>
    <div>
        <ul>
            <template v-for="(value, name) in props" :key="name">
                <li>{{ name }}: {{ value }}</li>
            </template>
        </ul>
    </div>
</template>