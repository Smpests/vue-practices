Vue.component('pjhubs-item', {
    props: ['pjhubs'],
    template: '<li>{{ pjhubs.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        pjhubsData: [
            { id:0, text: 'pjhubs01' },
            { id:1, text: 'pjhubs02' },
            { id:2, text: 'pjhubs03' },
        ]
    }
})