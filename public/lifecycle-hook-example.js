/* eslint-disable no-unused-vars */
const axios = require('axios').default;

let BlogPostComponent = {
    props: ['id'],
    data() {
        return {
            blogPost: null,
        }
    },
    // You can access component created elements using the 'this' keyword
    created() {
        /**
         * First make the link using the generic preface along with the specifc post id
         * THEN recieve the response from the api and create the blog post using the recieved api data
         */
        axios.get(`api/posts/${this.id}`).then(response => {
            this.blogPost = response.data
        })
    }
}