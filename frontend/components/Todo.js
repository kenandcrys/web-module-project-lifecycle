import React from 'react'

export default class Todo extends React.Component {
 
constructor(props){
  super(props)
}

  render() {
    const todo = this.props.todo
    return (
      <div key={todo.id} >
        <h2 onClick={this.props.onCompleted(todo.id)} style={{color: todo.completed === false ? "black" : "red" }} >{
        todo.completed === true ?  <span>{todo.name}&nbsp;✔</span> : todo.name
      }</h2>
      </div>
      )
  }
}
