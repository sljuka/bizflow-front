import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ProcessList from './ProcessList.jsx'
import ProcessDetails from './ProcessDetails.jsx'

export default React.createClass({

  render() {

    var content = <ProcessList processes={this.props.process.processes} showProcess={this.props.showProcess} />
    if(this.props.process.showedProcess !== null) {
      content = <ProcessDetails />
    }

    return (
      <Col md={4}>
        <div className="process-bubble">
          <h1 className="process-bubble__title">{this.props.process.humanName}<span className="process-bubble__title__version">0.0.{this.props.process.id}</span><Glyphicon glyph='remove' /></h1>
          {content}
        </div>
      </Col>
    );
  }
});

