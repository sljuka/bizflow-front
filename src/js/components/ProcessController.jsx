import React from 'react';
import Navbar from './Navbar.jsx';
import ProcessPanel from './ProcessPanel.jsx';
import ProcessActionCreators from '../actions/ProcessActionCreators'

export default React.createClass({

  // COMPONENT FUNCTIONS

  showProcess(blueprint, id) {
    ProcessActionCreators.showProcess(blueprint, id);
  },

  backToProcesses(blueprint) {
    ProcessActionCreators.showProcesses(blueprint);
  },

  closeBlueprint(blueprint) {
    ProcessActionCreators.closeBlueprint(blueprint);
  },

  runProcess(id) {
    ProcessActionCreators.runProcess(id);
  },

  createProcess(blueprint_id) {
    ProcessActionCreators.createProcess(blueprint_id);
  },

  assignTask(task_id) {
    ProcessActionCreators.assignTask(task_id);
  },

  finishTask(task_id) {
    ProcessActionCreators.finishTask(task_id);
  },

  componentDidMount() {
    ProcessActionCreators.viewProcess()
  },

  submitInput(process, value) {
    ProcessActionCreators.submitInput(process, value);
  },

  render() {
    return (
      <div>
        <Navbar handleLogout={this.props.handleLogout} />
        <ProcessPanel
          showProcess={this.showProcess}
          closeBlueprint={this.closeBlueprint}
          backToProcesses={this.backToProcesses}
          runProcess={this.runProcess}
          createProcess={this.createProcess}
          assignTask={this.assignTask}
          submitInput={this.submitInput}
          finishTask={this.finishTask} />
      </div>      
    );
  }
});

