import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import _ from 'lodash';

// data storage
let _blueprints = []

// add private functions to modify data
function blueprints(data) {
  _blueprints = data.blueprints;
}

// Facebook style store creation.
const BlueprintsStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getBlueprints() {
    return _.sortBy(_blueprints, 'name');
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.FETCH_BLUEPRINTS:
        blueprints(action.data)
        BlueprintsStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })
});

export default BlueprintsStore;
