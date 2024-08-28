<script setup>
import ProvideInjectA from '../components/ProvideInjectA.vue'
import ProvideInjectD from '../components/ProvideInjectD'
import ProvideInjectF from '../components/ProvideInjectF.vue'
</script>
<template>
    <div>
        <ProvideInjectA /><!-- A > B > C -->
        <ProvideInjectD /><!-- D > B > E -->
        <div>当有大量依赖需要提供时, 最好使用Symbol</div>
        <ProvideInjectF />
    </div>
</template>