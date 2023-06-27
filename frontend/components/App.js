import React from 'react'
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: ''
    }
      
  }
  
  componentDidMount(){
    axios.get(URL)
    .then(res => {
        this.setState({todos: res.data.data})
   })
   .catch(e =>{
     console.log(`No you didn't!!!`)
   })
  }

  handleInputChange = (e) => {
    e.preventDefault()
   this.setState({
     input: e.target.value
    });
  }

  formAddButton = () => {
     axios.post(URL, {name: this.state.input})
      .then(res =>{
        this.setState({ ...this.state, todos: this.state.todos.concat(res.data.data)})
        
       })
      .catch(e => console.log('Fetch it another way, dawg!!'))
  }

  

  onCompleted = id => evt => {
    axios.patch(`${URL}/${id}`)
      .then(res => {
        const updatedTodo = res.data.data;
        const updatedTodos = this.state.todos.map(todo => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo;
        });
        this.setState({ todos: updatedTodos });
      })
      .catch(e => {
        console.log('Well, you broke it');
      });
  }

   

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} 
        onCompleted={this.onCompleted}
        />

        <Form input={this.state.input} 
        onChange={this.handleInputChange} 
        formAddButton={this.formAddButton}
        />
       <button onClick={() => {
          this.setState(prevState => ({
          todos: prevState.todos.filter(todo => !todo.completed)
          }));
        }}>
        Clear Completed
        </button>
      </div>

      )
  }
}
