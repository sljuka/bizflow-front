import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProcessItem from "./ProcessItem.jsx"

export default React.createClass({

  render() {
    return (
      <ul className="process-bubble__list">
        {this.props.processes.map(process =>
          <ProcessItem key={process.id} process={process} />
        )}
      </ul>
    );
  }
});

