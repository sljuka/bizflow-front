import jquery from 'jquery';
import cookie from 'js-cookie';


const COOKIE_KEYS = {
  blueprints: "_bf_blueprints",
  user: "_bf_user",
  token: "_bf_token"
}

export default {


  // BLUEPRINTS

  getBlueprintNames: function(string) {
    
    var res = cookie(COOKIE_KEYS.blueprints);
    
    if(res === undefined)
      return [];

    if(typeof(res) == "string")
      res = JSON.parse(res).names;
    else
      res = res.names
    return res;
  
  },

  setBlueprintNames: function(data) {

    if(data == null || data.length === 0) {
      cookie.remove(COOKIE_KEYS.blueprints);
      return;
    }

    var cookie_data = {
      names: data
    }

    cookie.json = true;
    cookie(COOKIE_KEYS.blueprints, cookie_data);

  },

  // USER

  setUser: function(data) {
    cookie.json = false;
    cookie(COOKIE_KEYS.user, data.username);
    cookie(COOKIE_KEYS.token, data.token);
  },

  getUser: function() {
    cookie.json = false;
    var user = cookie(COOKIE_KEYS.user);
    var token = cookie(COOKIE_KEYS.token);
    return {user: user, token: token};
  },

  removeUser: function() {
    cookie.remove(COOKIE_KEYS.user);
    cookie.remove(COOKIE_KEYS.token);
    cookie.remove(COOKIE_KEYS.blueprints);
  }

}
