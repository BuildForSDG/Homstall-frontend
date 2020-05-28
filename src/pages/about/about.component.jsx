import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Button from '../../components/button/button.component';
import Marketer from '../../assets/images/home/marketer.svg';
import PaymentIcon from '../../assets/images/home/payment.svg';
import ShoppingIcon from '../../assets/images/home/shopping.svg';
import { AboutContainer, Placeholder, InfoContainer, ActionButtonContainer } from './about.container';
const About = () => {
  return (
    <AboutContainer>
      <Container className="themed-container">
        <Row sm="1" md="2">
          <Col>
            <Placeholder>
              <img src={Marketer} alt="market woman" />
            </Placeholder>
          </Col>
          <Col>
            <InfoContainer>
              <h6>How it works</h6>
              <h2>We are improving the way you sell & buy farm products.</h2>
              <p>
                HomStall is an online marketplace set up specifically to give farmers, producers, investors and
                customers direct channel to market and buy farm fresh produce and services
              </p>
              <ul>
                <li>
                  <h4>Farmers add products</h4>
                  <h5>Trusted and vetted farmers upload their products, fix their prices and location.</h5>
                </li>
                <li>
                  <h4>Buyers choose products</h4>
                  <h5>Buyers pick a product, choose from a list of verified farmers at best rates.</h5>
                </li>
                <li>
                  <h4>Complete transaction</h4>
                  <h5>Contact the farmer directly or buy through HomStall, we process, and ship to you Nationwide.</h5>
                </li>
              </ul>
              <ActionButtonContainer>
                <Button btn="buying" style={{ marginRight: '1rem' }}>
                  <img src={PaymentIcon} alt="payment icon" style={{ marginRight: '1rem' }} />
                  Start Shopping
                </Button>
                <Button btn="farmer">
                  <img src={ShoppingIcon} alt="payment icon" style={{ marginRight: '1rem' }} />
                  Start Selling
                </Button>
              </ActionButtonContainer>
            </InfoContainer>
          </Col>
        </Row>
      </Container>
    </AboutContainer>
  );
};

export default About;
