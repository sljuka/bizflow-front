import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProcessList from './ProcessList.jsx'

export default React.createClass({

  render() {
    return (
      <Col md={4}>
        <div className="process-bubble">
          <h1 className="process-bubble__title">{this.props.process.humanName}<span className="process-bubble__title__version">0.0.{this.props.process.id}</span></h1>
          <ProcessList processes={this.props.process.processes} />
        </div>
      </Col>
    );
  }
});

