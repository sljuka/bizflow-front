import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import $ from 'jquery'
import SessionStore from '../stores/SessionStore'
import ProcessStore from '../stores/ProcessStore'
import CookieHandler from '../utils/cookieHandler';

export default {

  viewProcess(name) {

    if(typeof(name) === "string") {
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.OPEN_BLUEPRINT,
        data: {
          blueprintName: name
        }
      });
    }

    var token = SessionStore.getUser().token;
    var blueprints = ProcessStore.getOpenedBlueprints();

    if(blueprints.length === 0)
      return;

    $.ajax({
      url: "http://localhost:3000/api/v1/processes",
      method: "GET",
      data: {
        token: token,
        names: JSON.stringify(blueprints)
      },
      success: function(data) {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.FETCH_PROCESSES,
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
  },

  showProcess(blueprint, id) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SHOW_PROCESS,
      data: {
        blueprint: blueprint,
        id: id
      }
    });
  },

  showProcesses(blueprint) {
    
  }

};
