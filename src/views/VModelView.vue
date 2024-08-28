<script setup>
import { ref } from 'vue'
import VModelA from '../components/VModelA.vue'
import VModelB from '../components/VModelB.vue'
import VModelC from '../components/VModelC.vue'
import VModelD from '../components/VModelD.vue'
const modelB = ref('')
const modelC1 = ref('')
const modelC2 = ref('FName')
const modelC3 = ref('LName')
const modelD1 = ref('')
const modelD2 = ref('')
</script>
<template>
    <div>
        原生元素: <VModelA />
        自定义组件: <VModelB v-model="modelB" />
        自定义model属性名字: <VModelC v-model:title="modelC1" v-model:firstName="modelC2" v-model:lastName="modelC3" />
        自定义修饰符: <VModelD v-model.capitalize="modelD1" v-model:title.uppercase="modelD2"/>
    </div>
</template>