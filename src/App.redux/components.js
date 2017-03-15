import React from 'react';

export const AppHeader = (props) => {
  return (
    <div className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h2>Welcome to GeekEvening "React & Redux"</h2>
    </div>
  );
}

export const AppBody = (props) => {
  return (
    <div className="App-intro">
      {props.children}
    </div>
  );
}
