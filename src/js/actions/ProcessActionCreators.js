import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import $ from 'jquery'
import SessionStore from '../stores/SessionStore'
import ProcessStore from '../stores/ProcessStore'
import CookieHandler from '../utils/cookieHandler';

export default {

  viewProcess(name) {
    
    var token = SessionStore.getUser().token;

    CookieHandler.addBlueprintName(name);
    var names = CookieHandler.getBlueprintNames();

    $.ajax({
      url: "http://localhost:3000/api/v1/processes",
      method: "GET",
      data: {
        token: token,
        names: JSON.stringify(names)
      },
      success: function(data) {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.PROCESSES,
          data: {
            processes: data
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
