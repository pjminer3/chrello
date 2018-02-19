import React, { Component } from 'react';

import Board from './board';

class HomePage extends Component {
  render() {
    return (
      <div> 
        <h3>This is my home Page </h3>
        <Board />
      </div>
    )
  }
}

export default HomePage;