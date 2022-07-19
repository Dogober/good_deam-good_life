const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
promise.then(response => response.json())
        .then(todos => {
            cnsole.log(todos)
        })