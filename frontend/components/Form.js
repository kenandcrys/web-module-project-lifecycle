import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <input placeholder='Todo Here' />
        <button>add Todo</button>
      </form>
      );
  }
}
