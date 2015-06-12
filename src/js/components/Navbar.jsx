import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import BlueprintList from './BlueprintList.jsx'

export default React.createClass({

  logoutClick(e) {
    e.preventDefault();
    this.props.handleLogout();
  },

  render() {

    var logo = <div> Bizflow </div>

    return (
      <Navbar brand={logo} toggleNavKey={0}>
        <Nav right eventKey={0}>
          <OverlayTrigger rootClose={true} trigger='click' placement='bottom' overlay={<Popover title='Process blueprints'><BlueprintList /></Popover>}>
            <NavItem eventKey={5}>PROCESSES</NavItem>
          </OverlayTrigger>
          <NavItem eventKey={4} onClick={this.logoutClick}>LOGOUT</NavItem>
        </Nav>
      </Navbar>
    );
  }
});
