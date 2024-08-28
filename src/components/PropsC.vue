<script setup>
const props = defineProps({
    greetingMessage: String,
    likes: Number,
    published: Boolean,
    ids: Array,
    author: Object,
})
</script>
<template>
    <div>
        <h4>Props:</h4>
        <ul>
            <template v-for="(value, name) in props" :key="name">
                <li v-if="value">{{ name }}: {{ value }}</li>
            </template>
        </ul>
    </div>
</template>