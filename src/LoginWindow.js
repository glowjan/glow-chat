import React, { Component } from 'react';
import './App.css';

class LoginWindow extends Component {

  constructor(props) {
      super(props);
      this.state = {value: 'coconut'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(ev){
    ev.preventDefault();
    this.props.onLogin(this.state.userId);
    return false;
  }

  handleChange(ev){
    this.setState({userId :ev.target.value});
  }

  render(){
    return (
      <div>
        <div>LoginWindow</div>
        <form id="loginForm" onSubmit={this.handleSubmit}>
          <span>Please enter your name </span>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}

export default LoginWindow;
