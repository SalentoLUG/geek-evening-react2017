import React, { Component } from 'react';
import {observer} from 'mobx-react'
import MobxDevTools from 'mobx-react-devtools';

import '../App.css';
import logo from '../logo.svg';

import {AppHeader, AppBody} from './components';

import TodoListStore from './mobx-store';

const todoListStore = new TodoListStore();

const TodoList = observer(class extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }
  addTodo() {
    const {input} = this.refs;
    this.props.todosStore.addTodo(input.value);
    input.value = "";
    input.focus();
  }
  onKeyPress(evt) {
    if (evt.key === "Enter") {
      this.addTodo();
    }
  }
  onClickAdd() {
    this.addTodo();
  }
  render() {
    const todos = this.props.todosStore.todos || [];
    return (
      <div>
        <input ref="input" onKeyPress={this.onKeyPress}/>
        <button onClick={this.onClickAdd}>Add</button>
        <ul>
          {
            todos.map((todo, i) => (
              <li key={i}>{todo}</li>
            ))
          }
        </ul>
      </div>
    );
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader logo={logo}/>
        <AppBody>
            <TodoList todosStore={todoListStore}/>
        </AppBody>
        <MobxDevTools/>
      </div>
    );
  }
  addTodo(msg) {
    const todos = (this.state && this.state.todos) || [];
    todos.push(msg);
    this.setState({todos});
  }
  onKeyPress(evt) {
    if (evt.key === "Enter") {
      this.addTodo(this.refs.input.value);
      this.refs.input.value = ''
      this.refs.input.focus();
    }
  }
  onClickAdd() {
    console.log("INPUT REF", this.refs.input);
    this.addTodo(this.refs.input.value);
    this.refs.input.value = ''
    this.refs.input.focus();
  }
}

export default App;
