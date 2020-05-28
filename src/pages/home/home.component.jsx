import React from 'react';
import { Row } from 'reactstrap';
import Button from '../../components/button/button.component';

// Local
import NavBar from '../../components/navbar/nav.component';
import Sample from '../sample/sample.component';
import About from '../about/about.component';
import Footer from '../footer/footer.component';
import Testimonial from '../testimonial/testimonial.component';
import SearchIcon from '../../assets/images/home/Search.svg';
import ArrowIcon from '../../assets/images/home/Arrow.svg';
import { HomeContainer, HeroImage, HeroInfo, SearchContainer, ArrowContainer } from './home.container';

const Home = () => {
  return (
    <HomeContainer>
      <HeroImage>
        <NavBar></NavBar>
        <Row>
          <HeroInfo>
            <h3>Guaranteed Fresh & Natural</h3>
            <h1>Buy affordable farm products directly from farmers near you</h1>
            <p>&nbsp; What would you like to buy?</p>
            <SearchContainer>
              <img src={SearchIcon} alt="search icon" />
              <input type="search" placeholder="e.g yam, eggs, apple ...." />
              <span>|</span>
              <ArrowContainer>
                <select name="" id="">
                  <option value="Lagos">Your Location</option>
                  <option value="Lagos">Lagos</option>
                </select>
                <img src={ArrowIcon} alt="arrow icon" />
              </ArrowContainer>
              <Button btn="search">Find farmers</Button>
            </SearchContainer>
          </HeroInfo>
        </Row>
      </HeroImage>
      <Sample />
      <About></About>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;
