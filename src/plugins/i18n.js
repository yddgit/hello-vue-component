export default {
    // 一个插件可以是一个有install()方法的对象, 也可以是一个函数
    // 安装函数以应用实例、传递给app.use()的额外选项作为参数
    // 插件可以用来: 注册全局组件或自定义指令、提供一个可注入资源、添加全局属性或方法
    install: (app, options) => {
        // 注入一个全局可用的$translate()方法
        app.config.globalProperties.$translate = (key) => {
            // 获取options对象的深层属性, 使用key作为索引
            return key.split('.').reduce((o, i) => {
                if(o) return o[i]
            }, options)
        }
        // 可以通过provide为插件用户供给一些内容, 如将插件接收到的options参数提供给整个应用, 让任何组件都能使用这个翻译字典对象
        app.provide('i18n', options)
    }
}