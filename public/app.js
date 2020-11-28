/* eslint-disable no-undef */

// component for the separate page link
let PageLink =  {
    // template id
    template: "#page-link-template",
    // props contained within this component
    props: {
        pageName: {
            // is a String
            type: String,
            // is required
            required: true
        }
    } // end of props
} // end of page-link component

// component for list of many page links (parent of PageLink)
let PageLinkList = {
    // template id
    template: "#page-link-list-template",
    // components contained within this component
    components: {
        // contains PageLink
        'page-link': PageLink
    },
    // data returned by component
    data () {
        return {
            // has-many page names
            pageNames: [
                'shoppinglist.html',
                'coffeeplans.html',
                'slots.html'
            ]
        }
    } // end of data
} // end of page-link-list component

// vue instance
new Vue ({
    // id of vue instance domain
    el: "#practice-links",
    // components contained witin this instance
    components: {
        // contains PageLinkList
        'page-link-list': PageLinkList
    }
}) // end of vue instance