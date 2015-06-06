import React from 'react';
import BootstrapActionCreators from '../actions/BootstrapActionCreators';

export default React.createClass({

  componentDidMount() {
    if (this.isMounted()) {
      BootstrapActionCreators.bootstrap();
    }
  },

  render() {
    return (
      <h1 className="text-center"><em> --- LOADING --- </em></h1>
    );
  }
});
