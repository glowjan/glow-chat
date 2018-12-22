import React, { Component } from 'react';
import './App.css';

class ChatWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pendingMessage : "something there"
    }

    this.onSend = this.onSend.bind(this);
  }

  renderMessage(msg){
    return <div key={msg.userId + msg.message} className={'textRow ' +  (msg.userId === this.props.userId ? 'mine' : 'notmine') }>{msg.message}</div>;
  }

  renderOutputArea(){
    return (
      <div id="outputArea" className="output">
        {this.props.messages.map((msg) => {return this.renderMessage(msg);})}
      </div>
    );
  }

  onInputChange(ev){
    this.setState({pendingMessage : ev.target.value});
  }

  onSend(ev){
    this.props.onMessage(this.state.pendingMessage);
    this.setState({pendingMessage: ""});
  }

  renderInputArea(){
    return(
      <div id="inputArea" className="inputArea">
        <textarea placeholder="Type here" value={this.state.pendingMessage} onChange={v => this.onInputChange(v)}/>
        <div>
        <input type="button" value="Send" onClick={this.onSend} />
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
