/* eslint-disable no-undef */

Vue.component('todo-item', {
    template: "#todo-template",
    data () {
        return {
            completed: false,
        }
    },
})

new Vue ({
    el: "#slots",
})