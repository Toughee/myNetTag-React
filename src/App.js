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
                <h4><span role="img" aria-label="Earth">🌎</span> Current address: </h4>
                <h4><span role="img" aria-label="weather">⛅</span> Current Weather and location: </h4>
                <h4><span role="img" aria-label="newspaper">📰</span> Current news:</h4>
                <div className="feedgrabbr_widget" id="fgid_e02ec004cb761ec7ac0f149c7"></div>
      </div>
    );
  }
}

export default App;
