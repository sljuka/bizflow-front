import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import InputModal from './InputModal.jsx'
import ModalTrigger from 'react-bootstrap/lib/ModalTrigger';

export default React.createClass({

  runClick(e) {
    e.preventDefault();
    this.props.runProcess(this.props.process.id);
  },

  backClick(e) {
    e.preventDefault();
    this.props.backToProcesses(this.props.process.name)
  },

  render() {

    var buttons = function(pcs) {

      var input = <span></span>
      if(pcs.head != null && pcs.head.length > 0)
        var input = <InputModal process={pcs} submitInput={this.props.submitInput} />

      var btns = {
        "not_started": <span><Glyphicon className="glyph-button" glyph='play' onClick={this.runClick} title="Run process"></Glyphicon></span>,
        "input":  <span>
                    <ModalTrigger modal={input} >
                      <Glyphicon className="glyph-button" glyph='question-sign' title="Input answer"></Glyphicon>
                    </ModalTrigger>
                  </span>
      }

      return btns[pcs.status]
    }.bind(this)

    return (
      <div className="process-bubble__details__menu">
        <Glyphicon onClick={this.backClick} className="glyph-button" glyph='circle-arrow-left' />
        
        {buttons(this.props.process)}
      </div>
    );
  }
});

