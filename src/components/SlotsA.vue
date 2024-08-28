<script setup>
</script>
<template>
    <!-- 具名插槽 -->
    <slot name="head"></slot>
    <button type="submit">
        <slot><!-- 默认name: default -->
            Submit <!-- 默认内容 -->
        </slot>
    </button>
    <slot name="foot"></slot>
</template>