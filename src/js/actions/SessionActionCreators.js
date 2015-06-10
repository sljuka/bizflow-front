import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import $ from 'jquery';
import Config from '../config';

export default {

  login(username, password) {
    $.ajax({
      url: Config.production.host + "/api/v1/users/login_info",
      method: "GET",
      data: {
        username: username,
        password: password
      },
      success: function(data) {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.LOGIN,
          data: data
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
  },

  logout() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.LOGOUT,
    });
  }

};
