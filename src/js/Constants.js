import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here
  ActionTypes: keyMirror({
    LOGIN: null,
    LOGOUT: null,
    ALERT: null,

    FETCH_BLUEPRINTS: null,

    FETCH_PROCESSES: null,
    SHOW_PROCESS: null,
    SHOW_PROCESSES: null,
    OPEN_BLUEPRINT: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
