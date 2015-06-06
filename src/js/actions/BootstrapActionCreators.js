import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import $ from 'jquery'
import SessionStore from '../stores/SessionStore'

export default {

  bootstrap() {
    $.ajax({
      url: "http://localhost:3000/api/v1/users/login_info",
      method: "GET",
      data: {
        username: "pera",
        password: "pass"
      },
      success: function(data) {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.ALERT,
          data: {
            alert: "danger",
            message: message
          }
        });
      },
      error: function(data) {
        var message = "Unexpected error occured"
        if(data.responseText !== undefined)
          message = JSON.parse(data.responseText).message
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.ALERT,
          data: {
            alert: "danger",
            message: message
          }
        });
      }
    });
  }

};
