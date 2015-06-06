import React from 'react';
import ProcessStore from "../stores/ProcessStore";
import ProcessBubble from "./ProcessBubble.jsx";
import Row from 'react-bootstrap/lib/Row';

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
          <ProcessBubble key={process.id} process={process} />
        )}
        </Row>
      </div>
    );
  }
});

