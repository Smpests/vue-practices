var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, PJHubs!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        } 
    }   
});