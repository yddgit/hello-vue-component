<script setup>
import { ref } from 'vue'
import EventA from '../components/EventA.vue'
import EventB from '../components/EventB.vue'
import EventC from '../components/EventC'
import EventD from '../components/EventD.vue'
import EventE from '../components/EventE.vue'

const count = ref(0)

function increaseCount(n) {
    count.value += n
}

function print() {
    console.log('Received param: ', arguments)
}
</script>
<template>
    <div>
        Count: {{ count }}<br/>
        <EventA @increase-by="(n) => count += n" />
        <EventA @increase-by="increaseCount" />
        支持once修饰符: <EventA @increase-by.once="increaseCount" />
        <EventB @submit="increaseCount(1)" />
        <EventC @submit="increaseCount(1)" />
        <EventD @submit="print" />
        如果一个emits选项中事件和原生事件同名, 则监听器只会触发声明的事件, 不再响应原生事件<br/>
        <EventE @submit="print" />
    </div>
</template>