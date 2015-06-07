import React from 'react';
import Navbar from './Navbar.jsx';
import ProcessPanel from './ProcessPanel.jsx';
import ProcessStore from "../stores/ProcessStore";
import ProcessActionCreators from '../actions/ProcessActionCreators'

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
    ProcessActionCreators.viewProcess()
  },

  componentWillUnmount() {
    ProcessStore.removeChangeListener(this._onChange);
  },

  showProcess(blueprint, id) {
    ProcessActionCreators.showProcess(blueprint, id);
  },

  backToProcessList() {
    ProcessActionCreators.showProcesses(blueprint);
  },

  render() {
    return (
      <div>
        <Navbar handleLogout={this.props.handleLogout} />
        <ProcessPanel processes={this.state.processes} showProcess={this.showProcess} />
      </div>      
    );
  }
});

