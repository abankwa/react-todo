import React, {Component} from 'react';

class TodoItem extends Component{

    //state = this.props.todoData
    
    handleCheck = (e) => {
        console.log(e.target.checked)
        this.props.markCompleted(e.target.id,e.target.checked)
    }

    
    render(){
        //get props
       const {id,title,completed} = this.props.todoData;

        return (
            <div className="todoItem">
                <input type="checkbox" id={id} onChange={this.handleCheck } checked={completed}></input>
                <div>{title}</div>
                <button className="btn" onClick={this.props.deleteTodo.bind(this,id)} >delete</button>
            </div>
            )
    }
}

    

export default TodoItem;