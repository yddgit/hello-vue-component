<script setup>
import Person from '../model/person'
// defineProps()中不可以访问<script setup>中定义的其他变量, 因为编译时整个表达式会被移到外部函数中
const props = defineProps({
    // 基础类型检查, null或undefined会跳转任何类型检查
    propA: Number,
    // 多种可能的类型
    propB: [String, Number],
    // 必传
    propC: {
        type: String,
        required: true,
    },
    // Number类型的默认值
    propD: {
        type: Number,
        default: 100,
    },
    // 对象类型的默认值
    propE: {
        type: Object,
        // 对象或数组的默认值必须从一个工厂函数返回, 该函数接收组件所接收的原始props作为参数
        default(rawProps) {
            return { message: 'Hello' }
        }
    },
    // 自定义类型校验函数
    propF: {
        validator(value) {
            return ['success', 'warning', 'danger'].includes(value)
        }
    },
    // 函数类型的默认值
    propG: {
        type: Function,
        // 不像对象或数组的默认, 这不是一个工厂函数, 这会是一个作为默认值的函数
        default() {
            return 'Default Function'
        }
    },
    // 类型校验type可选值: String, Number, Boolean, Array, Object, Date, Function, Symbol
    // type也可以是自定义的类或构造函数, Vue将会通过instanceof来检查类型是否匹配
    author: Person
})
</script>
<template>
    <div>
        <h4>Props:</h4>
        <ul>
            <template v-for="(value, name) in props" :key="name">
                <li>{{ name }}: {{ value }}</li>
            </template>
        </ul>
    </div>
</template>