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

      var alertHash = {
        primary: 'Alert',
        success: 'Success',
        info: 'Info',
        warning: 'Warning',
        danger: 'Error'
      }

      var alertTitle = this.state.alert != null ? alertHash[this.state.alert] : "alert";

      return (
        <Alert bsStyle={this.state.alert} onDismiss={this.handleAlertDismiss} dismissAfter={4000} className="notification-box">
          <h4>{alertTitle}</h4>
          <p>{this.state.message}</p>
        </Alert>
      );
    } else {
      return(<div></div>);
    }
  }
});
