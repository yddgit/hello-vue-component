<script setup>
</script>
<template>
    <div>
        <!-- name是一个保留attribute, 不会做为prop传递给插槽, 最终传递给父组件结果是{} -->
        <slot :title="'No Title'" name="title"></slot>
    </div>
</template>