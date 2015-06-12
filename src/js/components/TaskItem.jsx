import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProcessItem from "./ProcessItem.jsx"
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

  handleAssign(e) {
    e.preventDefault();
    this.props.assignTask(this.props.task.id);
  },

  handleFinish(e) {
    e.preventDefault();
    this.props.finishTask(this.props.task.id);
  },

  render() {

    var btns = {
      "not_assigned": <Button bsStyle='primary' onClick={this.handleAssign}>Assign</Button>,
      "assigned": <Button bsStyle='success' onClick={this.handleFinish}>Finish</Button>,
      "finished": ""
    }


    return (
      <ListGroupItem className={"task-item--" + this.props.task.status}><div>{this.props.task.human_name} </div>{btns[this.props.task.status]}</ListGroupItem>
    );
  }
});

