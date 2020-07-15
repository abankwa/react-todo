import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {

    state = {
        todos: [ ]
    }
    componentDidMount(){
        //get todo data from server
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
        .then(res => res.json())
        .then(data => {
            let tmp = this.state.todos
            tmp = data;
            this.setState({todos: tmp})
        })
    }

    deleteTodo =(id) => {
        this.setState({todos: this.state.todos.filter((todo) => todo.id != id)})
        //console.log('id')
    }

    addTodo = (data) => {
        //add item to server first, then update state/UI
        fetch("https://jsonplaceholder.typicode.com/todos",{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type":"application/json"
            }
        }).then(res => res.json()).then(data => {
            let tmp = JSON.parse(JSON.stringify(data));
            tmp.id = uuidv4();
            this.setState({todos: [...this.state.todos,tmp]})
        })
        
        
        
    }

    markCompleted = (id,status) => {
        let index = this.state.todos.findIndex(item => {return item.id == id})
        let tmp = JSON.parse(JSON.stringify(this.state.todos)); //clone todos
        tmp[index].completed = !tmp[index].completed; //toggle complete status
        this.setState({todos:tmp})
    }

    clearCompleted = () => {
        console.log('clear completed')
        this.setState({todos: this.state.todos.filter((todo) => todo.completed == false)})
    }

    markAll = () =>{
        let tmp = JSON.parse(JSON.stringify(this.state.todos))
        tmp.forEach(element => {
            element.completed = true;
        });
        this.setState({todos:tmp})
        console.log(tmp)
    }
    


    render(){
        //console.log('rendering App');
        return (  
            <>
                <TodoAdd addTodo={this.addTodo}/>
                {this.state.todos.map(todo =>  <TodoItem todoData={todo} key={todo.id} deleteTodo={this.deleteTodo} markCompleted={this.markCompleted}/>) /*this evaluates to a js array*/} 
                <button className="btnBase" onClick={this.clearCompleted} >clear completed</button>
                <button className="btnBase" onClick={this.markAll}>mark all</button>
            </>

        )
    }
}






export default App;