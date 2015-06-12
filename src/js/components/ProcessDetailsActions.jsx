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

    var actionClassName = function(process, action) {
      var res = "process-details__action-display__list__item";

      var current_action = null;
      if(process.head != null && process.head.length > 0 && process.head[0].action != null)
        current_action = process.head[0].action

      if(process.finished_at != null)
        res += "--finished";
      else if(current_action != null && current_action.id === action.id) {
        res += "--current";
      }
      return res;
    }

    var actions = <ul className="process-details__action-display__list"></ul>

    if(this.props.process.actions != null) {
      actions = <Panel className="process-details__task-display__list" header={<strong>Actions</strong>}>
                  <ul className="process-details__action-display__list">
                    {this.props.process.actions.map(action =>
                      <li className={actionClassName(this.props.process, action)} key={action.id}>
                        {action.human_name}
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

