import React from 'react'
import axios from 'axios';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    todos: []
    }
  }

componentDidMount(){
  axios.get(URL)
  .then(res => {
      this.setState({ ...this.state, todos: res.data})
  })
  .catch(e =>{
    console.log(`No you didn't!!!`)
  })
}

  render() {
    return (
      <Form />
      )
  }
}
