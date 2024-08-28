<script setup>
</script>
<template>
    <div>
        <slot :title="'No Title'" name="title"></slot>
        <slot content="No Content" :count="1"></slot>
    </div>
</template>