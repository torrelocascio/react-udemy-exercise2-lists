import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

state={
  name:'Joe',
  id    : '1',
  textMessage: 'Text Too Short'
}

changeTextMessage = () => {
  if (this.state.name.length > 5){
    let newTextMessage = 'Text Is Long Enough'
    return newTextMessage
  }
  else {
    let newTextMessage ='Text Too Short'
    return newTextMessage
  }
    
}  
  nameChangeHandler= (event) => {
    this.setState({
      name : event.target.value,
      id: '1',
      textMessage: this.changeTextMessage()
    })
    console.log(this.state.textMessage)
  }

  deleteCharHandler = (index) => {
   
const text = this.state.name.split('')
text.splice(index,1)
const updatedText = text.join('')
this.setState({
  name: updatedText
})
  }
  

  
  render() {

    const charList = this.state.name.split('').map((ch,index) =>{
return <Char 
clicked={() => this.deleteCharHandler(index)} 
key={index} 
character={ch}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input length={this.state.name.length} onChange={this.nameChangeHandler} type='text' defaultValue={this.state.name}/>
        <p>{this.state.name}</p>
        <Validation message={this.state.textMessage} key={this.state.id} length={this.state.name.length}/>
        {charList}
      </div>
  

      
    );
  }
}

export default App;
