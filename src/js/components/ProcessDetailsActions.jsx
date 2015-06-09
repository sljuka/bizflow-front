import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProcessItem from "./ProcessItem.jsx"
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ProcessDetailsTable from './ProcessDetailsTable.jsx';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

export default React.createClass({

  runClick() {
    this.props.runProcess(this.props.process.id);
  },

  render() {

    var actionClassName = function(current_action, action) {
      var res = "process-details__action-display__list__item"
      if(current_action != null && current_action.id === action.id) {
        res += "--current";
      }
      return res;
    }

    var actions = <ul className="process-details__action-display__list"></ul>

    if(this.props.process.actions != null) {

      var current = null;
      if(this.props.process.head != null && this.props.process.head.length > 0 && this.props.process.head[0].action != null)
        current = this.props.process.head[0].action

      actions = <Panel className="process-details__task-display__list" header='Actions'>
                  <ul className="process-details__action-display__list">
                    {this.props.process.actions.map(action =>
                      <li className={actionClassName(current, action)} key={action.id}>
                        {action.name}
                      </li>
                    )}
                  </ul>
                </ Panel>
    }

    return (
      <div>
        {actions}
      </div>
    );
  }
});

