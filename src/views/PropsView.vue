<script setup>
import PropsA from '../components/PropsA.vue'
import PropsB from '../components/PropsB'
import PropsC from '../components/PropsC.vue'
import PropsD from '../components/PropsD.vue'
import PropsE from '../components/PropsE.vue'
import Person from '../model/person'

const dynamicProp = '根据一个变量的值动态传入'
const post = {
    likes: 233,
    published: true,
    ids: [242,245,235],
    author: {
        name: 'Veronica',
        company: 'Veridian Dynamics',
    }
}
</script>
<template>
    <div>
        <PropsA msg="Hello Props A" />
        <PropsB msg="Hello Props B" />
        <PropsC greeting-message="组件属性建议用kebab-case形式" />
        <PropsC :greeting-message="dynamicProp" />
        <PropsC likes="233" /><!-- 浏览器控制台会得到一个类型警告 Invalid prop: type check failed for prop "likes" -->
        <PropsC :likes="233" :published="true" :ids="[1, 2, 3]" :author="{ name: 'Jack', company: 'Awesome' }" />
        <PropsC :likes="post.likes" :published="post.published" :ids="post.ids" :author="post.author" />
        <PropsC :="post" /><!-- 一个对象绑定多个prop -->
        单向数据流
        <ol>
            <li>Props遵循单身绑定原则, 父组件更新, 状态向下流往子组件, 不会逆向传递</li>
            <li>Props是只读的, 若要更新或转换, 可以定义局部数据属性或计算属性</li>
            <li>修改对象/数组类型的Props内部的值可能生效, 但性能损耗大, 难以理解, 应该通过子组件抛出事件来通知父组件改变</li>
        </ol>
        Props校验(required/自定义校验都只会在开发模式下显示警告, 不会影响内容渲染)
        <ol>
            <li>所有prop默认是可选的, 除非声明了required: true</li>
            <li>除Boolean外, 未传递的可选prop会有一个默认值undefined</li>
            <li>Boolean值未传递将被转换为false<span style="color:red">(这可以通过设置default来更改, 如 default: undefined将与非布尔类型的prop行为保持一致)</span></li>
            <li>如果声明了default值, 那么prop值被解析为undefined时, 无论prop是未传递还是显示式指明undefined, 都会改为default值</li>
        </ol>
        <PropsD
            :prop-a="999"
            prop-b="ABSC"
            prop-c="RequiredProp"
            prop-f="warning"
            :author="new Person('A', 'B')"
        />
        Boolean类型的转换
        <PropsE disabled /><!-- true -->
        <PropsE /><!-- false -->
        <PropsE :disabled="0" /><!-- 0 声明为多种类型时, 无论顺序如何, 默认规则都会应用 -->
    </div>
</template>