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
class App extends Component {
  componentDidMount() {
    console.log("COMPONENT MOUNTED", ReactDOM.findDOMNode(this));
  }
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <div className="App-intro">
          <input ref="input"/>
          <button onClick={this.onClick.bind(this)}>Focus</button>
        </div>
      </div>
    );
  }
  onClick() {
    console.log("INPUT REF", this.refs.input);
    this.refs.input.value = "It worked!!!";
    this.refs.input.focus();
  }
}

export default App;
