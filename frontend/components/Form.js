import React from 'react'

export default class Form extends React.Component {
constructor(props){
  super(props)
}

  render() {
    return (
      <form>
        <input
           placeholder='Todo Here' 
           value={this.props.input}
           onChange={this.props.onChange}
        />
        <button type='submit' 
           onClick={this.props.formAddButton}>Add Todo</button><br />
      </form>
      );
  }
}
