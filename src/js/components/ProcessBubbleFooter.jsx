import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default React.createClass({

  render() {
    return (
      <div className="process-bubble__footer">
        <Glyphicon onClick={this.closeClick} className="process-bubble__add" glyph='plus' />
      </div>
    );
  }
});

