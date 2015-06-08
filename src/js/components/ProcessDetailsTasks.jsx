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
    return (
      <div>
        <Panel className="process-details__task-display__list" header='Tasks'>
          Some default panel content here.
          <ListGroup fill>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>&hellip;</ListGroupItem>
          </ListGroup>
          Some more panel content here.
        </Panel>
      </div>
    );
  }
});

