/* eslint-disable no-undef */

let ContactItem =  {
    // template id
    template: "#contact-item-template",
    // contact item props
    props: {
        contactName: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        }
    }
}

let ContactList =  {
    // template id
    template: "#contact-list-template",
    // components
    components: {
        'contact-item': ContactItem
    },
    // contact list data
    data () {
        return {
            contactNames: [
                'Bruce Wayne',
                'Imahni King',
                'Bruce Wayne',
                'Imahni King',
                'Bruce Wayne',
                'Imahni King',
                'Bruce Wayne',
                'Imahni King',
            ]
        }
    }
}

new Vue ({
    // view element
    el: "#app",
    // components
    components: {
        'contact-list': ContactList
    }
})