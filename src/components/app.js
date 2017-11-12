import React, { Component } from 'react';
import CTA from './svg';

import FlexNav from './FlexNav';
import log from './log.js';

class App extends Component {
  constructor() {
  	super()
  }
  render() {

    document.addEventListener('DOMContentLoaded', function () {
      console.log('dom content loaded');
      new FlexNav('#nav');
    });
    return (
      <div className="topnav" id="nav">
        <p>testing svg animations in react</p>
        <button className="nav__burger">nav burger</button>
        <div className="nav">
          <p>menu</p>
        </div>
      </div>
    );
  }
}

export default App;
