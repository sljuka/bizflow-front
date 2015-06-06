import jquery from 'jquery';
import cookie from 'jquery.cookie';

function extractNames(data) {
  var res = []
  for(var i = 0; i < data.length; i++) {
    res.push(data[i].name)
  }
  return res;
}

export default {

  // BLUEPRINTS

  getBlueprintNames: function(string) {
    var res = jquery.cookie("_processes");
    if(res === undefined)
      return [];
    if(typeof(res) == "string")
      res = JSON.parse(res).names;
    else
      res = res.names
    return res;
  },

  setBlueprintNames: function(data) {
    var cookie_data = {
      names: data
    }
    
    jquery.cookie.json = true;
    jquery.cookie("_processes", cookie_data);
  },

  addBlueprintName: function(name) {
    var current = this.getBlueprintNames();
    var index = current.indexOf(name);
    if(index !== -1) {
      current.splice(index, 1);
    }
    current.unshift(name);
    this.setBlueprintNames(current);
  },

  // USER

  setUser: function(data) {
    jquery.cookie("_bf_user", data.username);
    jquery.cookie("_bf_token", data.token);
  },

  getUser: function() {
    var user = jquery.cookie("_bf_user");
    var token = jquery.cookie("_bf_token");
    return {user: user, token: token};
  },

  removeUser: function() {
    jquery.removeCookie('_bf_user');
    jquery.removeCookie('_bf_token');
    jquery.removeCookie('_processes');
  }

}
