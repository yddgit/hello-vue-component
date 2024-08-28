import { inject } from 'vue'

export default {
    props: ['count'],
    setup({ count }) {
        const messageFromJs = inject('messageFromJs') // 如果没有设置默认值且祖先链上没有提供, 则会抛出一个运行时警告
        const globalMessage = inject('globalMessage')
        return {
            globalMessage,
            messageFromJs,
            count
        }
    },
    template: `
        <h4 v-if="globalMessage">{{ globalMessage }}</h4>
        <div>C count: {{ count }}, message: {{ messageFromJs }}</div>
    `
}