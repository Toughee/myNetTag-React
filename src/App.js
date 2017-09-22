import React, { Component } from 'react';
import './App.css';
import './userId.js'


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
          <h2>| Small React app which provides you a brief 
            summary of your device data |</h2>
                <h4>• Your current time is {this.getDate()}</h4>
                <h4>• Your operating system is {this.getOS()}</h4>
        </div>
      </div>
    );
  }
}

export default App;
