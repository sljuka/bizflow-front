import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import $ from 'jquery';
import _ from 'lodash';
import CookieHandler from '../utils/cookieHandler';

// DATA
let _processes = [];
let _openedBlueprints = null;


/**
* PRIVATE SECTION
*/

function setProcesses(processes) {
  if(processes == null || processes.length === 0) {
    _processes = [];
  } else {
    _processes = mergeProcesses(_processes, processes);
  }
};

function removeBlueprints() {
  _openedBlueprints = [];
  CookieHandler.setBlueprintNames([]);
}

function openBlueprint(blueprintName) {

  // IF REFRESH RETRIEVE FROM COOKIES
  if(_openedBlueprints === null) {
    _openedBlueprints = CookieHandler.getBlueprintNames();
  }

  // TRIM
  _openedBlueprints = _.map(_openedBlueprints, _.trim);

  // REMOVE IF ALREADY OPENED AND PREPEND TO BEGINNING  
  _.remove(_openedBlueprints, function(item) { item === blueprintName })
  _openedBlueprints.unshift(blueprintName);

  // ENSURE LESS THAN 6
  if(_openedBlueprints.length > 6 || _processes.length > 6) {
    _openedBlueprints.splice(6);
    _processes.splice(6)
  }

  // ENSURE UNIQUE
  _openedBlueprints = _.uniq(_openedBlueprints);

  // SAVE TO COOKIES
  CookieHandler.setBlueprintNames(_openedBlueprints);

};

function showProcess(blueprintName, id) {
  var blueprint = _.find(_processes, {'name': blueprintName });
  var process = _.find(blueprint.processes, {'id': id});
  blueprint.showedProcess = process;
}

function showProcesses(name) {
  var blueprint = _.find(_processes, {'name': name });
  blueprint.showedProcess = null;
}

function mergeProcesses(current, fresh) {
  var blueprint_names = _openedBlueprints;
  var res = null;
  var showedProcess = null;
  var current_item = null;
  var fresh_item = null;
  
  res = _.map(blueprint_names, function(name) {
    current_item = _.find(current, {'name': name });
    fresh_item = _.find(fresh, {'name': name});
    if(current_item === undefined && fresh_item === undefined) {
      return null;
    } if(current_item === undefined && fresh_item !== undefined) {
      current_item = fresh_item;
      current_item.showedProcess = null;
    } else {
      showedProcess = current_item.showedProcess;
      current_item = fresh_item;
      current_item.showedProcess = showedProcess;
    }
    return current_item;
  });

  return res.filter(function(item) { return item != null });
}

function closeBlueprint(name) {
  _.remove(_openedBlueprints, function(item) { return item === name } );
  _.remove(_processes, function(item) { return item.name == name} );

  CookieHandler.setBlueprintNames(_openedBlueprints);
}

function refreshProcess(process) {
  var blueprint = _.find(_processes, { 'name': process.name });
  var index = _.findIndex(blueprint.processes, { 'id': process.id });

  if(index !== -1)
    blueprint.processes[index] = process;
  
  console.log(blueprint.processes);

  if(blueprint.showedProcess.id === process.id)
    blueprint.showedProcess = process;

  
}

/**
* END PRIVATE SECTION
*/

const ProcessStore = assign({}, BaseStore, {
  
  // CALLBACK

  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;
    switch(action.type) {

      case Constants.ActionTypes.FETCH_PROCESSES:
        setProcesses(action.data.processes);
        ProcessStore.emitChange();
        break;

      case Constants.ActionTypes.OPEN_BLUEPRINT:
        openBlueprint(action.data.blueprintName);
        break;

      case Constants.ActionTypes.SHOW_PROCESS:
        showProcess(action.data.blueprint, action.data.id)
        ProcessStore.emitChange();
        break;

      case Constants.ActionTypes.LOGOUT:
        removeBlueprints();
        setProcesses([]);
        break;

      case Constants.ActionTypes.CLOSE_BLUEPRINT:
        closeBlueprint(action.data.blueprint)
        ProcessStore.emitChange();
        break;

      case Constants.ActionTypes.SHOW_PROCESSES:
        showProcesses(action.data.blueprint)
        ProcessStore.emitChange();
        break;

      case Constants.ActionTypes.RUN_PROCESS:
        refreshProcess(action.data.process);
        ProcessStore.emitChange();
        break;

      case Constants.ActionTypes.FETCH_PROCESS:
        refreshProcess(action.data.process);
        ProcessStore.emitChange();
        break;

    }
  }),

  // ---

  // PUBLIC METHODS

  getProcesses() {
    return _processes;
  },

  getOpenedBlueprints() {
    var res = null;
    if(_openedBlueprints === null) {
      var cookie_bps = CookieHandler.getBlueprintNames()
      if(cookie_bps !== undefined) {
        res = cookie_bps;
        _openedBlueprints = cookie_bps;
      }
    } else {
      res = _openedBlueprints;
    }
    return res;
  }

  // ---

});

export default ProcessStore;
