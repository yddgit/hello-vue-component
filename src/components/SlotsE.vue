<script setup>
const items = [
    { body: 'Some long text', username: 'Name1', likes: 23 },
    { body: 'Long long text', username: 'Name2', likes: 32 },
    { body: 'Text that very long', username: 'Name3', likes: 52 },
]
</script>
<template>
    <ul>
        <li v-for="(item, i) in items" :key="i">
            <slot name="item" v-bind="item"></slot>
        </li>
    </ul>
</template>