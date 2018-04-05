import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state={
  name:'Joe'
}

  nameChangeHandler= (event) => {
    this.setState({name : event.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.nameChangeHandler} type='text' defaultValue={this.state.name}/>
        <p>{this.state.name}</p>
      </div>

      
    );
  }
}

export default App;
