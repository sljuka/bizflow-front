jest.dontMock('../src/js/stores/ProcessStore');
jest.dontMock('object-assign');
jest.dontMock('../src/js/Constants');
jest.dontMock('react/lib/keyMirror');
jest.dontMock('lodash');

describe('TodoStore', function() {

  var Constants = require('../src/js/Constants')
  const responseSample = [
    {
      "name": "make_breakfast",
      "humanName": "Make breakfast",
      "id": 4,
      "description": "creates breakfast",
      "processes": []
    },
    {
      "name": "sample_process_2",
      "humanName": "Sample process 2",
      "id": 1,
      "description": "sample_process_2",
      "processes": [
        {
          "name": "sample_process_2",
          "human_name": "Sample process 2",
          "created_at": "2015-06-05T07:25:16.000+02:00",
          "creator_id": 1,
          "description": "sample_process_2",
          "finished_at": null,
          "id": 3,
          "pid": "207214227",
          "process_blueprint_id": 1,
          "runned_at": null,
          "runner_id": null,
          "status": "not_started"
        },
        {
          "name": "sample_process_2",
          "human_name": "Sample process 2",
          "created_at": "2015-06-05T07:25:15.000+02:00",
          "creator_id": 1,
          "description": "sample_process_2",
          "finished_at": null,
          "id": 2,
          "pid": "617536830",
          "process_blueprint_id": 1,
          "runned_at": null,
          "runner_id": null,
          "status": "not_started"
        },
        {
          "name": "sample_process_2",
          "human_name": "Sample process 2",
          "created_at": "2015-06-05T07:25:10.000+02:00",
          "creator_id": 1,
          "description": "sample_process_2",
          "finished_at": null,
          "id": 1,
          "pid": "879073699",
          "process_blueprint_id": 1,
          "runned_at": null,
          "runner_id": null,
          "status": "not_started"
        }
      ]
    }
  ];

  // MOCK ACTIONS
  var processesAction = {
    source: 'VIEW_ACTION',
    action: {
      type: Constants.ActionTypes.FETCH_PROCESSES,
      data: {
        processes: responseSample
      }
    }
  };

  var openBlueprintAction = function(name) {
    return {
      source: 'VIEW_ACTION',
      action: {
        type: Constants.ActionTypes.OPEN_BLUEPRINT,
        data: {
          blueprintName: name
        }
      }
    };
  }

  var showProcessAction = function(name, id) {
    return {
      source: 'VIEW_ACTION',
      action: {
        type: Constants.ActionTypes.SHOW_PROCESS,
        data: {
          blueprint: name,
          id: id
        }
      }
    };
  }

  //

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

  it('opens blueprints', function() {
    
    expect(ProcessStore.getOpenedBlueprints()).toEqual([]);
    
    callback(openBlueprintAction("make_breakfast"));
    callback(openBlueprintAction("sample_process_2"));
    
    expect(ProcessStore.getOpenedBlueprints()).toEqual(["sample_process_2", "make_breakfast"]);
    
    callback(openBlueprintAction("sample_process"));
    
    expect(ProcessStore.getOpenedBlueprints()).toEqual(["sample_process", "sample_process_2", "make_breakfast"]);
    
    callback(openBlueprintAction("sample_process_2"));
    
    expect(ProcessStore.getOpenedBlueprints()).toEqual(["sample_process_2", "sample_process", "make_breakfast"]);
  });

  it('sets the correct values for _processes variable', function() {
    
    callback(openBlueprintAction("sample_process_2"));
    callback(openBlueprintAction("make_breakfast"));
    
    expect(ProcessStore.getOpenedBlueprints()).toEqual(["make_breakfast", "sample_process_2"]);
    
    callback(processesAction);
    
    expect(ProcessStore.getProcesses()).toEqual(responseSample);
  });

  it('only opens blueprints which are in _openedBluprints variable', function() {
    
    callback(openBlueprintAction("sample_process_2"));
    
    expect(ProcessStore.getOpenedBlueprints()).toEqual(["sample_process_2"]);
    
    callback(processesAction);
    
    expect(ProcessStore.getProcesses()).toEqual([responseSample[1]]);
  });

  it('saves showedProcesses', function() {
    callback(openBlueprintAction("sample_process_2"));
    callback(processesAction);

    console.log(ProcessStore.getProcesses());
    console.log(ProcessStore.getOpenedBlueprints());

    callback(showProcessAction("sample_process_2", 1));
    
    expect(ProcessStore.getProcesses()[0].showedProcess).toEqual(responseSample[1].processes[2]);
    
    callback(openBlueprintAction("make_breakfast"));
    callback(processesAction);
    
    expect(ProcessStore.getProcesses()[1].showedProcess).toEqual(responseSample[1].processes[2]);
  });

});
