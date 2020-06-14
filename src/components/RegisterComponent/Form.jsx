import React from "react";
import { Container } from "reactstrap";
// import "./register-styles.css"
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Buttons from "./Buttons"


export default function Form (){
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
                <label>First Name</label>
                <input type="text" />
              </div>
            </Col>
            <Col>
              <div class="form__input-div">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div class="form__input-div">
                <label>Phone Number</label>
                <input type="text" />
              </div>
            </Col>
            <Col>
              <div class="form__input-div">
                <label>State</label>
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
            <Col>
              <div class="form__input-div">
                <label>Confirm Password</label>
                <input type="password" />
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <Buttons
            buttonText="Register Now"
            facebookText="Register with facebook"
            disclaimerText="Already have an account?"
            disclaimerTextTwo="Log in"
          />
        </div>
      </div>
    );
}