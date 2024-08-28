<script setup>
import { inject } from 'vue'

const i18n = inject('i18n')

console.log(i18n.greetings.hello)
</script>
<template>
    <div>
        i18n plugin: {{ $translate('greetings.hello') }}
    </div>
</template>