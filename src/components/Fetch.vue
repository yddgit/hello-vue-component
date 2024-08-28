<script setup>
import { ref, computed } from 'vue'
import { useFetch } from './fetch'

const base = 'https://yesno.wtf/api?force='
const force = ref('yes')
const url = computed(() => base + force.value)

const { data, error, loading } = useFetch(url)

</script>
<template>
    <div>
        <div>异步状态</div>
        <button @click="force = 'yes'">Yes</button> <button @click="force = 'no'">No</button>
        <div v-if="error">Error occurred: {{ error }}</div>
        <div v-else-if="data">Data loaded: {{ data }}</div>
        <div v-else>Loading</div>
    </div>
</template>