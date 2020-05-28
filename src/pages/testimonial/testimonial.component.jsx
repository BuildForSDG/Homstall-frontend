import React, { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Swiper from 'react-id-swiper';

import Person1 from '../../assets/images/home/person1.svg';
import ArrowLeft from '../../assets/images/home/arrow-left.svg';
import ArrowRight from '../../assets/images/home/arrow-right.svg';
import Quotes from '../../assets/images/home/Quote2.svg';
import { Link } from 'react-router-dom';
import {
  TestimonialContainer,
  CardContainer,
  CardContent,
  ArrowLeftIcon,
  ArrowRightIcon,
  Navigation,
  QuotesIcon
} from './testimonial.container';

const Testimonial = () => {
  const [swiper, updateSwiper] = useState(null);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const settings = {
    slidesPerView: 1,
    freeMode: true
  };

  return (
    <TestimonialContainer>
      <QuotesIcon src={Quotes} />
      <Swiper getSwiper={updateSwiper} {...settings}>
        <CardContainer>
          <img src={Person1} alt="img 1" />
          <CardContent>
            <h4>Malam Ahmed Abdusalami</h4>
            <p>
              I didn’t go to school but I was interested in farming from a very young age. I used to sell my goods at
              Balogun market, Nigeria when a friend introduced me to HomStall, now I get more customers with no stress.{' '}
            </p>
            <Link to="/">
              View farmer profile <IoIosArrowRoundForward style={{ fontSize: '1.5rem' }} />
            </Link>
          </CardContent>
        </CardContainer>
      </Swiper>
      <Navigation>
        <ArrowLeftIcon src={ArrowLeft} alt="arrow left icon" onClick={goPrev} />
        <ArrowRightIcon src={ArrowRight} alt="arrow right icon" onClick={goNext} />
      </Navigation>
    </TestimonialContainer>
  );
};

export default Testimonial;
