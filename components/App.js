import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import ReactModal from './ModalComponents'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ReactModal />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
