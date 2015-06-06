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

  //blueprints: [{"id":1,"name":"sample_process_2","description":"sample_process_2","test":"1 sample_process_2"},{"id":2,"name":"narucivanje_jela","description":"proces za narucivanje jela","test":"2 narucivanje_jela"},{"id":3,"name":"sample_process","description":"sample_process","test":"3 sample_process"},{"id":4,"name":"make_breakfast","description":"creates breakfast","test":"4 make_breakfast"}]

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
