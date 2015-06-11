import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

  runClick() {
    this.props.runProcess(this.props.process.id);
  },

  render() {

    var buttons = {
      "not_started": <div><Button bsStyle='primary' onClick={this.runClick}>Run</Button><Button bsStyle='primary'>Input</Button></div>,
      "input": <div><Button bsStyle='primary'>Input</Button></div>
    }

    return (
      <div className="process-bubble__details__buttons">
        {buttons[this.props.process.status]}
      </div>
    );
  }
});

