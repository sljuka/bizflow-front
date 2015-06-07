import React from 'react';
import Col from 'react-bootstrap/lib/Col';

export default React.createClass({

  handleClick(e) {
    e.preventDefault();
    this.props.showProcess(this.props.process.name, this.props.process.id);
  },

  render() {
    return (
      <li className="process-bubble__list__item" onClick={this.handleClick}>#{this.props.process.pid}</li>
    );
  }
});

