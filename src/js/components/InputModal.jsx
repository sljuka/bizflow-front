import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Input from 'react-bootstrap/lib/Input';

export default React.createClass({

  submitInput(e) {
    e.preventDefault();
    this.props.submitInput(this.props.process, this.refs.inputSelect.getValue());
  },

  render() {
    return (
      <Modal {...this.props} title='Process input required' animation={false}>
        <div className='modal-body'>
          <p>{this.props.process.head[0].action.question}</p>
          <Input type='select' ref="inputSelect" placeholder='select'>
            {this.props.process.head[0].action.following.map(answer =>
              <option key={answer.id} value={answer.name}>{answer.human_name}</option>
            )}      
          </Input>
        </div>
        <div className='modal-footer'>
          <Button bsStyle='primary' onClick={this.submitInput}>Submit</Button>
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    );
  }
});
