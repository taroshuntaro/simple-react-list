import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: []
    };
    this.addText = this.addText.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  addText() {
    let val = this.refs.inputText.value.trim();
    if (val === '' || val === null) {
      return;
    }

    this.state.texts.push({
      text: val
    });

    this.setState({
      texts: this.state.texts
    });

    this.refs.inputText.value = '';
  }

  clearList() {
    this.state.texts.splice(0, this.state.texts.length);
    this.setState({
      texts: this.state.texts
    });
  }

  render() {
    return (
      <div className="List">
        <input type="text" ref="inputText" />
        <button type="button" onClick={this.addText}>add</button>
        <button type="button" onClick={this.clearList}>clear</button>
        <ul>
          {this.state.texts.map((texts, index) => <ListItem key={index} value={texts.text} />)}
        </ul>
      </div>
    )
  }
}

export default List;
