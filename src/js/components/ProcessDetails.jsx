import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProcessItem from "./ProcessItem.jsx"
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
        <ProcessDetailsButtons process={this.props.process} backToProcesses={this.props.backToProcesses} runProcess={this.props.runProcess} submitInput={this.props.submitInput} />
        <div className="process-details__panel">
          <div className="process-details__main-panel">
            <ProcessDetailsTable process={this.props.process} />
            <ProcessDetailsTasks
              process={this.props.process}
              assignTask={this.props.assignTask}
              finishTask={this.props.finishTask} />
          </div>
          <div className="process-details__action-display">
            <ProcessDetailsActions process={this.props.process} />
          </div>
        </div>
        
      </div>
    );
  }
});

