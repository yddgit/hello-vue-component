export default {
    // 字符串数组定义
    //props: ['msg'],
    // 对象形式定义
    props: {
        msg: String,
        title: String,
        likes: Number,
    },
    setup(props) {
        // setup()接收props做为第一个参数
        return { props }
    },
    template: `
        <div>
            <h4>Props:</h4>
            <ul>
                <li v-for="(value, name) in props" :key="name">{{ name }}: {{ value }}</li>
            </ul>
        </div>
    `
}