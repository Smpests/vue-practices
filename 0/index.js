var app = new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'first' },
            { text: 'second' },
            { text: 'third' },
        ]
    }   
});

app.todos.push({ text: 'fourth'})