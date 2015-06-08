import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Utils from '../utils/stringUtils';

export default React.createClass({

  handleClick(e) {
    e.preventDefault();
    this.props.showProcess(this.props.process.name, this.props.process.id);
  },

  render() {
    var cls = "process-bubble__list__item--" + this.props.process.status
    return (
      <li className={cls} onClick={this.handleClick}>
        #{this.props.process.pid}
        <span className="process-bubble__list__item__creation-time">{ Utils.timeAgo(new Date(this.props.process.created_at).getTime()) }</span>
      </li>
    );
  }
});

