// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value 
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            className="name"
            value={this.state.name}
            />
          <input type="submit"/>
        </form>
      </div>
    )
  };
};

export default BandInput;
