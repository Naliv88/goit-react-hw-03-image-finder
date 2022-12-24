import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  handleChange = evt => {
    this.setState({ input: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const inputData = this.state.input;
    console.log(inputData);
    this.props.onSubmit(inputData);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
