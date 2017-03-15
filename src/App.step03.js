import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const AppHeader = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to GeekEvening "React"</h2>
    </div>
  );
}

const AppBody = (props) => {
  return (
    <div className="App-intro">
      {props.children}
    </div>
  );
}

const TodoList = (props) => {
  const todos = props.todos || [];
  return (
    <ul>
      {
        todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))
      }
    </ul>
  );
}

class App extends Component {
  componentDidMount() {
    console.log("COMPONENT MOUNTED", ReactDOM.findDOMNode(this));
  }
  render() {
    const todos = (this.state && this.state.todos) || [];

    return (
      <div className="App">
        <AppHeader/>
        <AppBody>
          <input ref="input" onKeyPress={this.onKeyPress.bind(this)}/>
          <button onClick={this.onClickAdd.bind(this)}>Add</button>
          <TodoList todos={todos}/>
        </AppBody>
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
