import React, { Component } from 'react';
import TodoList from './TodoList'



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'learn javascript',
        completed: false
      },
      {
        id: 2,
        title: 'learn aws',
        completed: false
      },
      {
        id: 3,
        title: 'learn python',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render(){
    //console.log(this.state.todos)
    return <TodoList todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>;
  }
}


export default App;