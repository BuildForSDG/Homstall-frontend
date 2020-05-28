import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/home/Logo.svg';
import ArrowRight from '../../assets/images/home/arrow_downward.svg';
import FacebookIcon from '../../assets/images/home/facebook.svg';
import InstagramIcon from '../../assets/images/home/instagram.svg';
import TwitterIcon from '../../assets/images/home/twitter.svg';
import YoutubeIcon from '../../assets/images/home/youtube.svg';
import FruitImage from '../../assets/images/home/natural.svg';
import { FooterContainer, FruitImg } from './footer.container';
const Footer = () => {
  return (
    <FooterContainer>
      <Container fluid={true}>
        <Row Row xs="1" sm="2" md="5" style={{ marginBottom: '2rem' }}>
          <Col>
            <img src={Logo} alt="logo" style={{ width: '4.313rem', marginBottom: '1rem' }} />
            <p style={{ color: '#fff', fontSize: '13px', fontWeight: 300 }}>
              Buy and sell farm products from the comfort of your home.
            </p>
          </Col>
          <Col>
            <h4 style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Popular Categories</h4>
            <ul style={{ listStyle: 'none', color: '#fff' }}>
              <li>Poultry</li>
              <li>Fruits</li>
              <li>Livestock</li>
              <li>Fish & Seafood</li>
              <li>Vegetables</li>
              <li>
                More <img src={ArrowRight} alt="arrow right icon" style={{ marginLeft: '.5rem' }} />
              </li>
            </ul>
          </Col>
          <Col>
            <h4 style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Popular Products</h4>
            <ul style={{ listStyle: 'none', color: '#fff' }}>
              <li>Catfish</li>
              <li>Orange</li>
              <li>Cow</li>
              <li>Carrots</li>
              <li>Ugu Leaves</li>
              <li>
                More <img src={ArrowRight} alt="arrow right icon" style={{ marginLeft: '.5rem' }} />
              </li>
            </ul>
          </Col>
          <Col>
            <h4 style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Support</h4>
            <ul style={{ listStyle: 'none', color: '#fff' }}>
              <li>How it works</li>
              <li>Report a farmer</li>
              <li>FAQs</li>
              <li>Contact us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col>
            <h4 style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>General</h4>
            <ul style={{ listStyle: 'none', color: '#fff', marginBottom: '1rem' }}>
              <li>Login</li>
              <li>Register as a farmer</li>
              <li>Track my order</li>
            </ul>
            <ul style={{ listStyle: 'none', color: '#fff', marginBottom: '1rem', display: 'flex' }}>
              <li style={{ marginRight: '1rem' }}>
                <Link to="/">
                  <img src={FacebookIcon} alt="facebook icon" />
                </Link>
              </li>
              <li style={{ marginRight: '1rem' }}>
                <Link to="/">
                  <img src={InstagramIcon} alt="instagram icon" />
                </Link>
              </li>
              <li style={{ marginRight: '1rem' }}>
                <Link to="/">
                  <img src={TwitterIcon} alt="twiter icon" />
                </Link>
              </li>
              <li style={{ marginRight: '1rem' }}>
                <Link to="/">
                  <img src={YoutubeIcon} alt="youtube icon" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ textAlign: 'center', color: '#fff', fontSize: '10px', fontWeight: 100 }}>
              &copy; &nbsp; &nbsp;2020 HomStall. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
      <FruitImg src={FruitImage} alt="fruit image" />
    </FooterContainer>
  );
};

export default Footer;
