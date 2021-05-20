import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Exprience from './components/Exprience';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PersonalInfo />
        <Education />
        <Exprience />
      </div>
    );
  }
}

export default App;
