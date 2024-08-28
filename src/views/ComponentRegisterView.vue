<script setup>
import ComponentD from '../components/ComponentD.vue'
import ComponentE from '../components/ComponentE.vue'
import ComponentF from '../components/ComponentF'
</script>
<template>
    <div>
        全局注册:<br/>
        <ComponentA/><br/>
        <ComponentB/><br/>
        <ComponentC/><br/>
        局部注册:<br/>
        <component-d/> (使用kebab-case风格引用组件)<br/>
        <ComponentE/><br/>
        <ComponentF/><br/>
    </div>
</template>