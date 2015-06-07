import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import BlueprintStore from '../stores/BlueprintStore'
import BlueprintActionCreators from '../actions/BlueprintActionCreators'
import ProcessActionCreators from '../actions/ProcessActionCreators'

export default React.createClass({

  getInitialState() {
    return {
      blueprints: BlueprintStore.getBlueprints()
    };
  },

  logoutClick(e) {
    e.preventDefault();
    this.props.handleLogout();
  },

  handleClick(e) {
    e.preventDefault();
    ProcessActionCreators.viewProcess(e.target.textContent);
  },

  _onChange() {
    this.setState({
      blueprints: BlueprintStore.getBlueprints()
    });
  },

  componentDidMount() {
    BlueprintStore.addChangeListener(this._onChange);
    BlueprintActionCreators.retrieveBlueprints();
  },

  componentWillUnmount() {
    BlueprintStore.removeChangeListener(this._onChange);
  },

  render() {

    var logo = <div> Bizflow </div>

    return (
      <Navbar brand={logo} toggleNavKey={0}>
        <Nav right eventKey={0}>
          <DropdownButton eventKey={3} title='PROCESSES'>
            {this.state.blueprints.map(item =>
              <MenuItem key={item.id} onClick={this.handleClick}>{item.name} </MenuItem>
            )}
          </DropdownButton>
          <NavItem eventKey={4} onClick={this.logoutClick}>LOGOUT</NavItem>
        </Nav>
      </Navbar>
    );
  }
});
