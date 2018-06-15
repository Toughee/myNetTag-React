import React, { Component } from 'react';
import './App.css';

class App extends Component {

  getDate() {
    const date = new Date()
    return date.toTimeString();
  }

  render() {
    return (
      <div className="App animated zoomIn">
                <h4>🕒 Time: {this.getDate()}</h4>
                <h4>🌎 Current address: </h4>
                <h4>⛅ Weather: </h4>
                <h4>📰 Current news:</h4>
                <iframe></iframe>
      </div>
    );
  }
}

export default App;
