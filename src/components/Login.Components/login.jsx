import React from 'react';
import { Container } from 'reactstrap';
// import "./register-styles.css"
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Buttons from '../RegisterComponent/Buttons';

export default function LogInForm() {
  return (
    <div class="form__input">
      <Container fluid="md">
        <Row>
          <Col>
            <div class="form__input-div">
              <label>Email</label>
              <input type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="form__input-div">
              <label>Password</label>
              <input type="password" />
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Buttons
          buttonText="Log In"
          facebookText="Log In with facebook"
          disclaimerText="Don't have an account?"
          disclaimerTextTwo="Join Homstall"
        />
      </div>
    </div>
  );
}
