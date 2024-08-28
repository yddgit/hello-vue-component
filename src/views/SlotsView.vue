<script setup>
import { ref } from 'vue'
import SlotsA from '../components/SlotsA.vue'
import SlotsB from '../components/SlotsB.vue'
import SlotsC from '../components/SlotsC.vue'
import SlotsD from '../components/SlotsD.vue'
import SlotsE from '../components/SlotsE.vue'
const message = ref('Awsome operation')
const head = ref('head')
const foot = ref('foot')
</script>
<template>
    <div>
        <!-- 插槽内容可以是任意合法的模板内容: 文本、多个元素、组件。模板中表达式只能访问其定义时所处的作用域 -->
        <SlotsA>
            <template v-slot:head><h4>Start</h4></template>
            <template #default><span style="color:red">Click me!</span> {{ message }}</template>
            <template #foot><h4>End</h4></template>
        </SlotsA><br/>
        <SlotsA>
            <template v-slot:head><h4>Start</h4></template>
            <!-- 当一个组件同时接收具名和默认插槽时，所有位于顶级非template节点都被隐式的视为默认插槽的内容 -->
            <span style="color:red">Click me!</span> {{ message }}
            <template #foot><h4>End</h4></template>
        </SlotsA><br/>
        <SlotsA>
            <!-- 动态插槽名 -->
            <template v-slot:[head]><h4>Start</h4></template>
            <span style="color:red">Click me!</span> {{ message }}
            <template #[foot]><h4>End</h4></template>
        </SlotsA><br/>
        <!-- 向插槽传递参数: default -->
        <h1>父组件使用子组件中的数据</h1>
        <SlotsB v-slot="slotProps">
            <span>{{ slotProps.count }}</span>
            <p>{{ slotProps.content }}</p>
        </SlotsB>
        <SlotsB v-slot="{ content, count }"><!-- 展开 -->
            <span>{{ count }}</span>
            <p>{{ content }}</p>
        </SlotsB>
        <!-- 向插槽传递参数: 具名插槽 -->
        <SlotsC>
            <template v-slot:title="slotProps">
                <h2>{{ slotProps.title }}</h2>
            </template>
        </SlotsC>
        <SlotsC>
            <template v-slot:title="{ title }">
                <h2>{{ title }}</h2>
            </template>
        </SlotsC>
        <SlotsC>
            <template #title="{ title }">
                <h2>{{ title }}</h2>
            </template>
        </SlotsC>
        <!-- 混用具名插槽和默认插槽传参时, 默认插槽需要显式的使用template标签 -->
        <SlotsD>
            <template #title="{ title }">
                <h2>{{ title }}</h2>
            </template>
            <template v-slot="{ content, count }">
                <span>{{ count }}</span>
                <p>{{ content }}</p>
            </template>
        </SlotsD>
        <!-- 高级列表组件 -->
        <SlotsE>
            <template v-slot:item="{ body, username, likes }">
                <div>
                    <p>{{ body }}</p>
                    <p>by {{ username }} | {{ likes }} likes</p>
                </div>
            </template>
        </SlotsE>
    </div>
</template>