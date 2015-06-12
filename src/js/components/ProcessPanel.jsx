import React from 'react';
import ProcessBubble from "./ProcessBubble.jsx";
import Row from 'react-bootstrap/lib/Row';
import ProcessStore from "../stores/ProcessStore";

export default React.createClass({

  getInitialState() {
    return {
      processes: ProcessStore.getProcesses()
    };
  },

  _onChange() {
    this.setState({
      processes: ProcessStore.getProcesses()
    });
  },

  componentDidMount() {
    ProcessStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ProcessStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <div className="container-fluid">
        <Row>
        {this.state.processes.map(process =>
          <ProcessBubble
            key={process.id}
            process={process}
            showProcess={this.props.showProcess}
            closeBlueprint={this.props.closeBlueprint}
            backToProcesses={this.props.backToProcesses}
            runProcess={this.props.runProcess}
            createProcess={this.props.createProcess}
            assignTask={this.props.assignTask}
            submitInput={this.props.submitInput}
            finishTask={this.props.finishTask} />
        )}
        </Row>
      </div>
    );
  }
});

