import React, { Component } from 'react'


class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



    render(){
        const { id, title } = this.props.todo; //destructuring

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: 'black',
    color: 'white',
    border: 'gray solid 1px',
    float: 'right',
    borderRadius: '50%',
    cursor: 'pointer'

}




export default TodoItem;