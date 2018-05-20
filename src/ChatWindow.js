import React, { Component } from 'react';
import './App.css';

class ChatWindow extends Component {
  render(){
    return (
      <div>
        <div>ChatWindow</div>
        <div>
          Output Value:
          <textarea disabled/>
        </div>
        <textarea placeholder="Type here"/>
        <input type="button" value="Send" />
      </div>
    );
  }
}

export default ChatWindow
