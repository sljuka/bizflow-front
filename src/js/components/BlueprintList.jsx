const React = require('react'); 
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import BlueprintStore from '../stores/BlueprintStore';
import ProcessStore from '../stores/ProcessStore';
import BlueprintActionCreators from '../actions/BlueprintActionCreators'
import ProcessActionCreators from '../actions/ProcessActionCreators'


export default React.createClass({

  getInitialState() {
    return {
      blueprints: BlueprintStore.getBlueprints(),
      openedBlueprints: ProcessStore.getOpenedBlueprints()
    };
  },
  
  handleOpenClick(e) {
    e.preventDefault();
    ProcessActionCreators.viewProcess(e.target.textContent);
  },

  handleCloseClick(e) {
    e.preventDefault();
    ProcessActionCreators.closeBlueprint(e.target.textContent);
  },

  _onChange() {
    this.setState({
      blueprints: BlueprintStore.getBlueprints(),
      openedBlueprints: ProcessStore.getOpenedBlueprints()
    });
  },

  componentDidMount() {
    BlueprintStore.addChangeListener(this._onChange);
    ProcessStore.addChangeListener(this._onChange);
    BlueprintActionCreators.retrieveBlueprints();
  },

  componentWillUnmount() {
    ProcessStore.removeChangeListener(this._onChange);
    BlueprintStore.removeChangeListener(this._onChange);
  },

  render() {

    var openedBps = this.state.openedBlueprints

    var classNameFunc = function(blueprint) {
      var res = "navbar__blueprint-list__item";
      var index = openedBps.indexOf(blueprint);
      return index === -1 ? res : res + "--selected";
    }

    var opClick = this.handleOpenClick;
    var clClick = this.handleCloseClick;
    var clickFunc = function(blueprint) {
      var index = openedBps.indexOf(blueprint);
      return index === -1 ? opClick : clClick;
    }

    return (
      <ul className="navbar__blueprint-list">
        {this.state.blueprints.map(blueprint =>
          <li className={classNameFunc(blueprint.name)} onClick={clickFunc(blueprint.name)} key={blueprint.id}>{blueprint.name}</li>
        )}
      </ul>
    );
  }
});

