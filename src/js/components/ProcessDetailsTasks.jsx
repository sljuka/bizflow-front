import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProcessItem from "./ProcessItem.jsx"
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ProcessDetailsTable from './ProcessDetailsTable.jsx';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import TaskItem from './TaskItem.jsx';

export default React.createClass({

  

  render() {

    var tasks = [];
    var content = "";
    if(this.props.process.head != null && this.props.process.head[0].action != null && this.props.process.head[0].action.tasks.length > 0) {
      tasks = this.props.process.head[0].action.tasks;
      content = <Panel className="process-details__task-display__list" header={<strong>Tasks</strong>}>
                  <ListGroup fill>
                    {tasks.map(task =>
                      <TaskItem key={task.id} task={task} assignTask={this.props.assignTask} finishTask={this.props.finishTask}/>
                    )}
                  </ListGroup>
                </Panel>
    }

    return (
      <div>
        {content}     
      </div>
    );
  }
});

