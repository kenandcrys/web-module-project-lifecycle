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

  

  onCompleted = () => {
      
    console.log(`It's working!`)
      
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

      </div>

      )
  }
}
