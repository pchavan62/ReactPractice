import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Body/>
      </div>
    );
  }
}

class Body extends Component {

    constructor(props){
        super(props);

        this.state = {
            data : 0
        };

        this.getRandomNumber = this.getRandomNumber.bind(this);
    }

    getRandomNumber(){
       // console.log("Random Number called...")
        this.setState({data : Math.floor(Math.random()*10)})
    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.getRandomNumber}>Random Number</button>
                <Number number = {this.state.data}></Number>
            </div>

        );
    }
}

class Number extends Component {
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
            </div>
        );
    }
}

export default App;
