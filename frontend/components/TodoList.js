import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const todos = this.props.todos.map(todo => {
      return (
        <Todo onCompleted={this.props.onCompleted} key={todo.id} todo={todo} />);
    });
    return (
      <div>
        {todos}
      </div>
    );
  }
}
