<script>
// 使用普通的script来声明
export default {
    // 声明当前组件不自动继承父组件的attribute
    // 最常见的场景是attribute需要应用在根节点以外的其他元素上
    inheritAttrs: false
}
</script>
<script setup>
defineProps(['title'])

const log = (o) => console.log(o)
</script>
<template>
    <div>
        <h3 :style="$attrs.style">{{ title }}</h3>
        <!-- 透传的attribute可以在模板中用$attrs直接访问到, $attrs对象包含了除组件所声明的props/emits之外的所有attribute, 如: class, style, v-on等 -->
        <span class="title" :class="$attrs.class">Fallthrough attributes: {{ $attrs }}</span><br/>
        <!-- 1. 和props有所不同, 透传的attributes在JavaScript中保留了原始的大小写, 所以如foo-bar这样的属性需要通过 $attrs['foo-bar'] 来访问 -->
        <!-- 2. @click这类事件监听器通过 $attrs.onClick 这样一个函数暴露出来 -->
        <button @click="(e) => { log($attrs); $attrs.onOp(e) }">{{ $attrs['op-name'] }}</button>
    </div>
</template>