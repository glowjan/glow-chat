import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js'
import LoginWindow from './LoginWindow.js'

class App extends Component {

  constructor(){
    super();
    this.state = {user : null}
  }

  isLogged() {
    return this.state.user
  }

  render() {
    if (this.isLogged()) {
      return (
        <ChatWindow user={this.state.user}/>
      );
    } else {
      return (
         <LoginWindow onLogin={v => this.setState({user:v})}/>
       );
    }
  }
}

export default App;
