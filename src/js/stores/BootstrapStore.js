import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _bootstrap = false;

// add private functions to modify data
function bootstrap() {
  _bootstrap = true;
}

// Facebook style store creation.
const BootstrapStore = assign({}, BaseStore, {
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
      case Constants.ActionTypes.BOOTSTRAP:
        bootstrap();
        BootstrapStore.emitChange();
        break;
        // add more cases for other actionTypes...
    }
  })
});

export default BootstrapStore;
