<script>
export default {
    inheritAttrs: false
}
</script>
<script setup>
</script>
<template>
    <!-- 为了样式在button外包装一层div, 想要所有class/style/v-on这类属性都应用到内部的button上, 可以使用v-bind="$attrs"来实现 -->
    <div class="btn-wrapper">
        <!-- 没有参数的v-bind会将一个对象的所有属性都作为attribute应用到目标元素上 -->
        <button class="btn" v-bind="$attrs">Hit me!</button>
    </div>
</template>