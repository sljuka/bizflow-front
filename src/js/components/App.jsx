import React, {PropTypes} from 'react';
import ProcessController from './ProcessController.jsx';
import Authentication from './Authentication.jsx';
import Alert from './Alert.jsx'
import SessionActionCreators from '../actions/SessionActionCreators'
import SessionStore from '../stores/SessionStore'
import Bootstrapping from './Bootstrapping.jsx'

export default React.createClass({

  getInitialState() {
    return {
      user: SessionStore.getUser()
    };
  },

  handleLogin(user, pass) {
    SessionActionCreators.login(user, pass);
  },

  handleLogout() {
    SessionActionCreators.logout();
  },

  _onChange() {
    this.setState({
      user: SessionStore.getUser()
    });
  },

  componentDidMount() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    SessionStore.removeChangeListener(this._onChange);
  },

  render() {

    var content = <Authentication handleLogin={this.handleLogin} />
    if(this.state.user !== null) {
      content = <ProcessController handleLogout={this.handleLogout} />
    }

    return (
      <div>
        <Alert />
        {content}
      </div>
    );

  }

});
