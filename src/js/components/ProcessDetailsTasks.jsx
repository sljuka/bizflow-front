import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProcessItem from "./ProcessItem.jsx"
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ProcessDetailsTable from './ProcessDetailsTable.jsx';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default React.createClass({

  render() {

    var tasks = [];
    var content = "";
    if(this.props.process.head != null && this.props.process.head[0].action != null && this.props.process.head[0].action.tasks.length > 0) {
      tasks = this.props.process.head[0].action.tasks;
      content = <Panel className="process-details__task-display__list" header='Tasks'>
                  <ListGroup fill>
                    {tasks.map(task =>
                      <ListGroupItem key={task.id}><div>{task.name} </div><Button className="right">Assign</Button></ListGroupItem>
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

