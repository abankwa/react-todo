import React, { Component } from 'react'
import TodoItem from './TodoItem'



class TodoList extends Component {

    


    render(){
        //console.log(this.props.todos)
        let a = this.props.todos.map((todo) =>(
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>))
            console.log(a)
        return a;
       
    }
}

export default TodoList;
