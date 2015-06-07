import React from 'react';
import ProcessBubble from "./ProcessBubble.jsx";
import Row from 'react-bootstrap/lib/Row';

export default React.createClass({

  render() {
    return (
      <div className="container-fluid">
        <Row>
        {this.props.processes.map(process =>
          <ProcessBubble key={process.id} process={process} showProcess={this.props.showProcess} />
        )}
        </Row>
      </div>
    );
  }
});

