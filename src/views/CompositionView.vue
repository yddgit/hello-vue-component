<script setup>
import MousePositionA from '../components/MousePositionA.vue'
import MousePositionB from '../components/MousePositionB.vue'
import MousePositionC from '../components/MousePositionC.vue'
import Fetch from '../components/Fetch.vue'
</script>
<template>
    <div>
        <MousePositionA />
        <MousePositionB />
        <MousePositionC />
        <Fetch />
        <div>
            约定和最佳实践
            <ul>
                <li>命名以use开头</li>
                <li>输入参数最好用unref()兼容ref而不只是原始值, ref参数可以用watch/watchEffect来监听</li>
                <li>返回ref而不是reactive</li>
                <li>确保在onUnmounted中清理副作用</li>
                <li>组合函数应该始终被同步调用</li>
                <li>选项式API中使用组合式函数: 在setup()中调用, 返回绑定必须在setup()中返回, 以便暴露给this及其模板</li>
            </ul>
        </div>
    </div>
</template>