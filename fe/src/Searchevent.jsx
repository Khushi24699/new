import React, { Component } from 'react';
import { INITIAL_EVENTS } from './event-utils'
import ReactDOM from 'react-dom'
import Select from 'react-select';
import './main.css'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const options=INITIAL_EVENTS;

export default class Searchevent extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        
      />
      
    );
  }
}