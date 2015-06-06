import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import $ from 'jquery';
import _ from 'lodash';
import CookieHandler from '../utils/cookieHandler';

// data storagelet
let _processes = [];

// add private functions to modify data
function setProcesses(processes) {
  _processes = processes
}

// Facebook style store creation.
const ProcessStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getProcesses() {
    return _processes;
  },

  getNames() {
    return CookieHandler.getBlueprintNames()
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;
    switch(action.type) {
      case Constants.ActionTypes.PROCESSES:
        setProcesses(action.data.processes);
        ProcessStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })
});

export default ProcessStore;
