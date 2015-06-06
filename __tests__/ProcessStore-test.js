jest.dontMock('../src/js/stores/ProcessStore');
jest.dontMock('object-assign');

describe('TodoStore', function() {

  var Constants = require('../src/js/Constants');

  // mock actions inside dispatch payloads
  var actionTodoCreate = {
    source: 'VIEW_ACTION',
    action: {
      actionType: Constants.PROCESSES,
      processes: [{"name":"make_breakfast","humanName":"Make breakfast","id":4,"description":"creates breakfast","processes":[]},{"name":"narucivanje_jela","humanName":"Narucivanje jela","id":2,"description":"proces za narucivanje jela","processes":[]},{"name":"sample_process","humanName":"Sample process","id":3,"description":"sample_process","processes":[]},{"name":"sample_process_2","humanName":"Sample process 2","id":1,"description":"sample_process_2","processes":[{"name":"sample_process_2","human_name":"Sample process 2","created_at":"2015-06-05T07:25:16.000+02:00","creator_id":1,"description":"sample_process_2","finished_at":null,"id":3,"pid":"207214227","process_blueprint_id":1,"runned_at":null,"runner_id":null,"status":"not_started"},{"name":"sample_process_2","human_name":"Sample process 2","created_at":"2015-06-05T07:25:15.000+02:00","creator_id":1,"description":"sample_process_2","finished_at":null,"id":2,"pid":"617536830","process_blueprint_id":1,"runned_at":null,"runner_id":null,"status":"not_started"},{"name":"sample_process_2","human_name":"Sample process 2","created_at":"2015-06-05T07:25:10.000+02:00","creator_id":1,"description":"sample_process_2","finished_at":null,"id":1,"pid":"879073699","process_blueprint_id":1,"runned_at":null,"runner_id":null,"status":"not_started"}]}]
    }
  };

  var Dispatcher;
  var ProcessStore;
  var callback;

  beforeEach(function() {
    Dispatcher = require('../src/js/Dispatcher');
    ProcessStore = require('../src/js/stores/ProcessStore');
    callback = Dispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

});