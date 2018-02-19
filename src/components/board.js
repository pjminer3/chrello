import React, { Component } from 'react';

import Ticket from './ticket';

class Board extends Component {
  render() {
    return (
      <div>
        <h3>Board element</h3>
        <Ticket />
      </div>
    );
  }
};

export default Board;