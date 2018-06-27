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
                <h4><span role="img" aria-label="clock">🕒</span> Time: {this.getDate()}</h4>
                <h4><span role="img" aria-label="weather">⛅</span> Current Weather: {}°C in {}</h4>
                <h4><span role="img" aria-label="newspaper">📰</span> Current news:</h4>
                <div className="feedgrabbr_widget" id="fgid_e02ec004cb761ec7ac0f149c7"></div>
                <h4><a href="https://github.com/Toughee/uPetitBio">Github repo</a></h4>
      </div>
    );
  }
}

export default App;
