state = {
    todos:[{
        id: 1,
        title: "title one",
        completed: true,
    },{
        id: 2,
        title: "title two",
        completed: true

    },{
        id: 3,
        title: "title three",
        completed: true
    }]
}

//state = state.todos.filter(item => { return item.completed==false})
todos = JSON.parse(JSON.stringify(state.todos))
//console.log(todos)

index = state.todos.findIndex(item => {return item.id == 1})

state.todos[index].completed = !state.todos[index].completed;

//console.log(todos)

