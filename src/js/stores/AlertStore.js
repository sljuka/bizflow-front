import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _alert = "";
let _message = "";

// add private functions to modify data
function alert(data) {
  _message = data.message
  _alert = data.alert
}

// Facebook style store creation.
const AlertStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getMessage() {
    return _message;
  },

  getAlert() {
    return _alert;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.ALERT:
        alert(action.data)
        AlertStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })
});

export default AlertStore;
