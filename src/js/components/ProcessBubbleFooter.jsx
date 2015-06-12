import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default React.createClass({

  handleClick(e) {
    e.preventDefault();
    this.props.createProcess(this.props.process.id);
  },

  render() {
    return (
      <div className="process-bubble__footer">
        <Glyphicon onClick={this.handleClick} className="process-bubble__add" glyph='plus' />
      </div>
    );
  }
});

