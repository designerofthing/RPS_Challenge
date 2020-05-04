import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.linkto}>{this.props.text}</Link>
      </div>
    );
  }
}

export default Button;