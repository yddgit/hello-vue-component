<script setup>
import { ref } from 'vue'
const searchText = ref('')
</script>
<template>
    <div>
        <input v-model="searchText" /> {{ searchText }} <br/>
        <!-- 等价于 -->
        <input :value="searchText" @input="searchText = $event.target.value" /> {{ searchText }}
    </div>
</template>