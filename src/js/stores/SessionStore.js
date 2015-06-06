import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import CookieHandler from '../utils/cookieHandler';

// data storage
let _user = null;

// add private functions to modify data
function login(username, key) {
  _user = {
    username: username,
    token: key
  }
  CookieHandler.setUser(_user)
}

function logout() {
  _user = null;
  CookieHandler.removeUser();
}



// Facebook style store creation.
const SessionStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getUser() {
    var res = null;
    if(_user === null) {
      if(CookieHandler.getUser().user !== undefined && CookieHandler.getUser().token !== undefined) {
        res = CookieHandler.getUser();
        _user = res;
      }
    } else {
      res = _user;
    }
    return res;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.LOGIN:
        let username = action.data.data.username;
        let key = action.data.data.api_key;
        login(username, key)
        SessionStore.emitChange();
        break;
      case Constants.ActionTypes.LOGOUT:
        logout();
        SessionStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })
});

export default SessionStore;
