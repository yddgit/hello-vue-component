export default {
    emits: ['inFocus', 'submit'],
    setup(props, ctx) { // emit也可以安全的被解构: setup(props, { emit }) { ... }
        return {
            buttonClick() {
                console.log('EventC: Submitted!')
                ctx.emit('submit')
            }
        }
    },
    template: `
        <button @click="buttonClick">Submit</button><br/>
    `,
}