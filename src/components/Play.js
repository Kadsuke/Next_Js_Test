import React, { Component } from 'react';

class Play extends Component {
  handleClick(e) {
    const value = e.target.textContent;
    this.props.setChoice(value);
  }

  render() {
    return (
      <div className='btn-group btn-group-block'>
        <button className='btn btn-success' onClick={this.handleClick.bind(this)}>Rock</button>
        <button className='btn btn-success' onClick={this.handleClick.bind(this)}>Paper</button>
        <button className='btn btn-success' onClick={this.handleClick.bind(this)}>Scissors</button>
      </div>
    );
  }

}

export default Play;
