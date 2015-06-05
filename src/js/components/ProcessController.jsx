import React from 'react';
import Navbar from './Navbar.jsx';
import ProcessPanel from './ProcessPanel.jsx';

export default React.createClass({

  render() {
    return (
      <div>
        <Navbar handleLogout={this.props.handleLogout} />
        <ProcessPanel />
      </div>      
    );
  }
});

