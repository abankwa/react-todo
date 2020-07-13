import React, {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';

class TodoAdd extends Component {

    state = {
            id: 999,
            title: "",
            completed: false
    }

    updateState = (event) => {
       const {name,value} = event.target
       let tmp = this.state;
       tmp.title = value;
       this.setState(tmp)
    }

    handleAdd = (e) => {
        this.setState({id:uuidv4()})
        this.props.addTodo(this.state)
        this.setState({title:""}) //clear textbox after adding
    }

    render(){
        return (
            <div className="addItem">
                <input type="text" value={this.state.title} name="todoInput" placeholder="add todo.." onChange={this.updateState}/>
                <button onClick={this.handleAdd}>add</button>                
            </div>
        )
    }
}

export default TodoAdd;