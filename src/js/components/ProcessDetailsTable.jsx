import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import Utils from '../utils/stringUtils';

export default React.createClass({

  render() {

    var pcs = this.props.process;
    
    var runned_at = pcs.runned_at
    if(runned_at === null)
      runned_at = "not runned yet"
    else
      runned_at = Utils.timeAgo(new Date(runned_at).getTime());

    var finished_at = pcs.finished_at
    if(finished_at === null)
      finished_at = "not finished yet"
    else
      finished_at = Utils.timeAgo(new Date(finished_at).getTime());

    return (
      <Table className="process-details-table" striped bordered condensed hover>
        <tbody>
          <tr>
            <th>name</th>
            <td>{pcs.name}</td>
          </tr>
          <tr>
            <th>pid</th>
            <td>{pcs.pid}</td>
          </tr>
          <tr>
            <th>created</th>
            <td>{Utils.timeAgo(new Date(pcs.created_at).getTime())}</td>
          </tr>
          <tr>
            <th>runned</th>
            <td>{runned_at}</td>
          </tr>
          <tr>
            <th>finished</th>
            <td>{finished_at}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
});

