import React, {PropTypes} from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import AlertStore from '../stores/AlertStore';

export default React.createClass({

  getInitialState() {
    return {
      message: "",
      alert: "danger"
    };
  },

  _onChange() {
    this.setState({
      message: AlertStore.getMessage(),
      alert: AlertStore.getAlert()
    });
  },

  componentDidMount() {
    AlertStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    AlertStore.removeChangeListener(this._onChange);
  },

  handleAlertDismiss() {
    this.setState({message: ""});
  },

  render() {
    if(this.state.message != "") {
      return (
        <Alert bsStyle={this.state.alert} onDismiss={this.handleAlertDismiss} dismissAfter={4000} className="notification-box">
          <h4>{this.state.message}</h4>
        </Alert>
      );
    } else {
      return(<div></div>);
    }
  }
});
