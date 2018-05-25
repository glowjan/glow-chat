import React, { Component } from 'react';
import './App.css';

class ChatWindow extends Component {

  constructor(){
    super();
    this.state = {
      messages : [
        {userId:'me', message:'hello you'},
        {userId:'you', message:'hello me'},
        {userId:'me', message:'bye you'},
        {userId:'you', message:'bye me'}
      ]
    }
  }

  renderMessage(msg){
    return <div className={'textRow ' +  (msg.userId==this.props.userId ? 'mine' : 'notmine') }>{msg.message}</div>;
  }

  renderOutputArea(){
    return (
      <div id="outputArea" className="output">
        {this.state.messages.map((msg) => {return this.renderMessage(msg);})}
      </div>
    );
  }

  renderInputArea(){
    return(
      <div id="inputArea" className="inputArea">
        <textarea placeholder="Type here" />
        <div>
        <input type="button" value="Send" />
        </div>
      </div>
    );
  }

  render(){
    return (
      <div>
        <div>ChatWindow</div>
        {this.renderOutputArea()}
        {this.renderInputArea()}
      </div>
    );
  }
}

export default ChatWindow
