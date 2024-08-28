import { createApp } from 'vue'
import App from './App.vue'
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
import ComponentC from './components/ComponentC.js'
import router from './router'
import i18nPlugin from './plugins/i18n.js'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(i18nPlugin, {
    greetings: {
        'hello': '你好',
    }
})


// 全局注册链式调用
app
    .component('ComponentA', ComponentA)
    .component('ComponentB', ComponentB)
    .component('ComponentC', ComponentC)

// 全局provide
app.provide('globalMessage', 'Global Message from App')

app.mount('#app')
