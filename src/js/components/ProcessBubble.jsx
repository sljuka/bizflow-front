import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ProcessList from './ProcessList.jsx'
import ProcessDetails from './ProcessDetails.jsx'
import ProcessBubbleFooter from './ProcessBubbleFooter.jsx'

export default React.createClass({

  closeClick(e) {
    e.preventDefault();
    this.props.closeBlueprint(this.props.process.name);
  },

  render() {

    var content = <ProcessList
                    processes={this.props.process.processes}
                    showProcess={this.props.showProcess}/>

    if(this.props.process.showedProcess != null) {
      content = <ProcessDetails
                  process={this.props.process.showedProcess}
                  backToProcesses={this.props.backToProcesses}
                  runProcess={this.props.runProcess}
                  assignTask={this.props.assignTask}
                  submitInput={this.props.submitInput}
                  finishTask={this.props.finishTask}/>
    }

    return (
      <Col md={6} xs={12} lg={4}>
        <div className="process-bubble">
          <h1 className="process-bubble__title">
            {this.props.process.humanName}
            <span className="process-bubble__title__version">0.0.{this.props.process.id}</span>
            <Glyphicon onClick={this.closeClick} className="process-bubble__close" glyph='remove' />
          </h1>
          {content}
          <ProcessBubbleFooter process={this.props.process} createProcess={this.props.createProcess} />
        </div>
      </Col>
    );
  }
});

