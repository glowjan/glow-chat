import React, { Component } from 'react';
import './App.css';
import ChatWindow from './ChatWindow.js'
import LoginWindow from './LoginWindow.js'

class App extends Component {

  constructor(){
    super();
    this.state = {user : 'me',
    messages : [
      {userId:'me', message:'hello you'},
      {userId:'you', message:'hello me'},
      {userId:'me', message:'bye you'},
      {userId:'you', message:'bye me'}
    ]}

    this.sendMessage = this.sendMessage.bind(this);
  }

  isLogged() {
    return this.state.user
  }

  sendMessage(msg){
    this.setState({messages: this.state.messages.concat({userId:'me', message:msg})});
  }

  render() {
    if (this.isLogged()) {
      return (
        <ChatWindow userId={this.state.user}
                    messages={this.state.messages}
                    onMessage={this.sendMessage}/>
      );
    } else {
      return (
         <LoginWindow onLogin={v => this.setState({user:v})}/>
       );
    }
  }
}

export default App;
