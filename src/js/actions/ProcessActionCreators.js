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

    var token = SessionStore.getUser().token;

    $.ajax({
      url: "http://localhost:3000/api/v1/processes/" + id,
      method: "GET",
      data: {
        token: token,
      },
      success: function(data) {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.FETCH_PROCESS,
          data: {
            process: data
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

  showProcesses(blueprint) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SHOW_PROCESSES,
      data: {
        blueprint: blueprint
      }
    });
  },

  closeBlueprint(blueprint) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.CLOSE_BLUEPRINT,
      data: {
        blueprint: blueprint
      }
    });
  },

  runProcess(id) {
    var token = SessionStore.getUser().token;

    $.ajax({
      url: "http://localhost:3000/api/v1/processes/" + id + "/run",
      method: "POST",
      data: {
        token: token,
      },
      success: function(data) {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.RUN_PROCESS,
          data: {
            process: data.data.process
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
