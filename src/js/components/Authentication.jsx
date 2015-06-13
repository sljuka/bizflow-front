import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import ButtonInput from 'react-bootstrap/lib/ButtonInput'
import Loading from './Loading.jsx';
import Alert from 'react-bootstrap/lib/Alert';

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
          <Col xs={12} mdOffset={3} md={6}>
            <form className="authentication__form" autoComplete="off">
              
              <h1 className="authentication__form__title text-center">Login</h1>

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
        
              <ButtonInput className="authentication__form__submit"
                type="submit"
                value="Login"
                onClick={this.loginClick} />
    
            </form>
          </Col>
          <Col xs={12} md={3}>
            <Alert className="authentication__hint">
              <h4>Hint</h4>
              <p>Test user</p>
              <p><strong>username:</strong> 'test'</p>
              <p><strong>password:</strong> 'test'</p>
              <p>This is a showcase environment, some security concerns were ommited</p>
              <p>App is restarted every hour, so feel free to fiddle around with the app.</p>
            </Alert>
          </Col>
        </Row>
      </div>
    );
  }

});

