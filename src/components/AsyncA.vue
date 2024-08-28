<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
<template>
    <div>
        Dynamic Component: <button @click="count++">{{ count }}</button>
    </div>
</template>