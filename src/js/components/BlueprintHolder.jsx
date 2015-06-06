const React = require('react'); 
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default React.createClass({

  componentDidMount() {
    // $.get(this.props.source, function(result) {
    //   var lastGist = result[0];
    //   if (this.isMounted()) {
    //     this.setState({
    //       username: lastGist.owner.login,
    //       lastGistUrl: lastGist.html_url
    //     });
    //   }
    // }.bind(this));
  },

  render() {
    return (
      <DropdownButton eventKey={3} title='PROCESSES'>
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </DropdownButton>
    );
  }
});

