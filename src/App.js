import React, { Component } from 'react';
import './App.css';



class App extends Component {

  getDate() {
    const date = new Date()
    return date.toTimeString();
  }

  getBrowserData() {
    const bData = navigator.userAgent;
    return bData || 'Sorry. Your Browser Data is unavailable';
  }

  getOS() {
    const osSys = navigator.platform;
    return osSys || 'Your OS information was not found';
  }
  

  render() {
    return (
      <div className="App animated bounceInUp">
        <div className="App-header">
                <h4>• Your current time is {this.getDate()}</h4>
                <h4>• Your operating system is {this.getOS()}</h4>
        </div>
      </div>
    );
  }
}

export default App;
