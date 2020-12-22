/* eslint-disable no-undef */

Vue.component ('notification-message', {
    template: '#notification-message-template',
    props: {
        type: {
            type: String,
            required: true,
            default: 'info'
        },
        header: {
            type: String,
            required: true,
            default: 'info'
        }
    }
})

new Vue ({
    el: '#notification-app'
})