import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here
  ActionTypes: keyMirror({
    ADD_TASK: null,
    LOGIN: null,
    LOGOUT: null,
    ALERT: null,
    BOOTSTRAP: null,
    BLUEPRINTS: null,
    PROCESSES: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
