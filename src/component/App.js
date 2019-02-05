import React, { Component } from 'react';
import List from './List';
import { css } from 'emotion';

const style = css({
  textAlign: 'center'
})

class App extends Component {
  render() {
    return (
      <div className={style}>
        <List />
      </div>
    );
  }
}

export default App;
