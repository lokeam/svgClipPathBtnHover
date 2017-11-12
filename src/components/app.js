import React, { Component } from 'react';
import CTA from './svg';

// import Crystal from './Crystal';
import InsiderNav from './InsiderNav';
import log from './log.js';

class App extends Component {
  constructor() {
  	super()
  }
  render() {
    // console.log(Crystal);
    var test = new InsiderNav();
  	log('fromlog');

    return (
      <div>
        <p>testing svg animations in react</p>
        <CTA id="profile" className="profile nav" color="#fff"/>
        <div id="nav" className="nav">
          <p>menu</p>
        </div>
      </div>
    );
  }
}

export default App;
