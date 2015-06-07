import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import $ from 'jquery'
import SessionStore from '../stores/SessionStore'

export default {

  retrieveBlueprints() {
    $.ajax({
      url: "http://localhost:3000/api/v1/blueprints",
      method: "GET",
      data: {
        token: SessionStore.getUser().token
      },
      success: function(data) {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.FETCH_BLUEPRINTS,
          data: {
            blueprints: data
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
