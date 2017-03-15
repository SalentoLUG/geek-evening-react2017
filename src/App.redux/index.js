import React, { Component } from 'react';
import { connect, Provider } from 'react-redux'

import '../App.css';
import logo from '../logo.svg';

import {AppHeader, AppBody} from './components';
import {store, actions} from './redux-store';

import ReduxDevTools from './redux-devtools';

const mapStateToProps = (state) => (
  {todos: state.todos || []}
);

const TodoList = connect(mapStateToProps)(class extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }
  addTodo() {
    const {input} = this.refs;
    this.props.dispatch(actions.addTodo(input.value));
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
    const todos = this.props.todos || [];
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
      <Provider store={store}>
        <div className="App">
          <AppHeader logo={logo}/>
          <AppBody>
              <TodoList/>
          </AppBody>
          <ReduxDevTools/>
        </div>
      </Provider>
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
