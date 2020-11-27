/* eslint-disable no-undef */
// const { default: Vue } = require("vue");

// eslint-disable-next-line no-undef

// Non X-Template format of using Vue components
Vue.component ('click-counter', {
    template: '<button v-on:click = "count++"> {{ count }} </button>',
    data() {
        return {
            count: 0
        }
    }
})

// X-template format of using Vue components
Vue.component('other-counter', {
    template: '#click-counter-template',
    data()
    {
        return {
            count: 0
        }
    }
})

// Plan component
let PlanComponent = {
    // template id
    template: '#plan-template',
    // props that the PlanComponent constant contains
    props: {
        // name object
        name: {
            // is a String
            type: String,
            // is required
            required: true,
        },
        selectedPlan: {
            type: String,
        }
    },
    methods: {
        select() {
            this.$emit('plan-selected', this.name)
        }
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan
        }
    }
}

// Plan outline component
let PlanOutlineComponent = {
    // template id
    template: '#plan-outline',
    // components local only to this component
    components: {
        // PlanComponent is now one of plan-outline-component's local components
        'plan-component' : PlanComponent,
    },
    // data that this component returns
    data () {
        return {
            // an array of plan names 
            planNames: ['The Teacher', 'The Single', 'The Hacker'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(PlanComponent) {
            this.selectedPlan = PlanComponent
        }
    }
}

// Vue element in focus for coffeeplans.html
new Vue ({
    // Vue instance id
    el: '#coffee-plans',
    components: {
        'plan-outline-component' : PlanOutlineComponent,
    }
})