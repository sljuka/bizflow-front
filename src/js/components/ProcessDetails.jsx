import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProcessItem from "./ProcessItem.jsx"
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ProcessDetailsTable from './ProcessDetailsTable.jsx';
import ProcessDetailsButtons from './ProcessDetailsButtons.jsx';
import ProcessDetailsActions from './ProcessDetailsActions.jsx';
import ProcessDetailsTasks from './ProcessDetailsTasks.jsx';

export default React.createClass({

  backClick(e) {
    e.preventDefault();
    this.props.backToProcesses(this.props.process.name);
  },

  render() {
    return (
      <div className="process-bubble__details">
        <Glyphicon onClick={this.backClick} className="process-bubble__back" glyph='circle-arrow-left' />
        <div className="process-details__panel">
          <div className="process-details__main-panel">
            <ProcessDetailsTable process={this.props.process} />
            <ProcessDetailsButtons process={this.props.process} runProcess={this.props.runProcess} />
            <ProcessDetailsTasks process={this.props.process} />
          </div>
          <div className="process-details__action-display">
            <ProcessDetailsActions process={this.props.process} />
          </div>
        </div>
        
      </div>
    );
  }
});

