import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import ButtonInput from 'react-bootstrap/lib/ButtonInput'
import Loading from './Loading.jsx';

export default React.createClass({

  loginClick(e) {
    e.preventDefault();
    var un = document.getElementById("username").value;
    var pass= document.getElementById("password").value;
    this.props.handleLogin(un, pass); 
  },

  render() {
    return (
      <div className="container">
        <Row className="authentication">
          <Col xsOffset={3} xs={6}>
            <form className="authentication__form" autoComplete="off">
              
              <Input
                id="username"
                name="username"
                type="text"
                label="*What's your username?" />
                
              <Input
                id="password"
                name="password"
                type="password"
                label="*What's your password?" />
        
              <ButtonInput
                type="submit"
                value="Login"
                onClick={this.loginClick} />
    
            </form>
          </Col>
        </Row>
      </div>
    );
  }

});

