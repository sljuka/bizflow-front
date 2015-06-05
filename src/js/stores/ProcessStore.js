import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import $ from 'jquery';
import _ from 'lodash';

// data storagelet
_processes = [];
let _inputChoose = null;

// add private functions to modify data

// Facebook style store creation.
const ProcessStore = assign({}, BaseStore, {
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
        ProcessStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })
});

export default ProcessStore;
