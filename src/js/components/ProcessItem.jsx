import React from 'react';
import Col from 'react-bootstrap/lib/Col';

export default React.createClass({

  render() {
    return (
      <li className="process-bubble__list__item">#{this.props.process.pid}</li>
    );
  }
});

