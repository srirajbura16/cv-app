import React, { Component } from 'react';
import Personal from './components/personal/Personal';
import Education from './components/education/Education';

class App extends Component {
  render() {
    return (
      <div className="resume">
        <Personal />
        <Education />
      </div>
    );
  }
}

export default App;
