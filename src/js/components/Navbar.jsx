import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default React.createClass({

  handleClick(e) {
    e.preventDefault();
  },

  logoutClick(e) {
    e.preventDefault();
    this.props.handleLogout();
  },

  render() {

    var logo = <div> Bizflow </div>

    return (
      <Navbar brand={logo} toggleNavKey={0}>
        <Nav right eventKey={0}>
          <DropdownButton eventKey={3} title='PROCESSES'>
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Another action</MenuItem>
            <MenuItem eventKey='3'>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='4'>Separated link</MenuItem>
          </DropdownButton>
          <NavItem eventKey={4} onClick={this.logoutClick}>LOGOUT</NavItem>
        </Nav>
      </Navbar>
    );
  }
});
