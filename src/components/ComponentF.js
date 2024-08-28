import ComponentD from './ComponentD.vue'

export default {
    components: {
        ComponentD,
    },
    setup() {

    },
    template: `
        Component F (<span style="color:red">局部注册: <ComponentD/></span>)
    `,
}