import React, { useState } from 'react';
import Swiper from 'react-id-swiper';

import Button from '../button/button.component';

import ArrowLeft from '../../assets/images/home/arrow-left.svg';
import ArrowRight from '../../assets/images/home/arrow-right.svg';
import Apple from '../../assets/images/home/apple.png';
import {
  ProductContainer,
  HeaderContainer,
  CardContainer,
  MenuContainer,
  Direction,
  ArrowLeftIcon,
  ArrowRightIcon,
  Card
} from './product.container';
const Product = () => {
  const settings = {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true
  };
  const products = [
    { img: Apple, name: 'Fruits', info: '450 farmers, available in 12 locations' },
    { img: Apple, name: 'Livestocks', info: '40 farmers, available in 14 locations' },
    {
      img: Apple,
      name: 'Apple',
      info: '78 farmers, available in 23 locations'
    },
    { img: Apple, name: 'Cows', info: 'available in 6 locations' },
    {
      img: Apple,
      name: 'Eggs',
      info: '120 farmers, available in 6 locations'
    },
    { img: Apple, name: 'Catfish', info: '120 farmers, available in 6 locations' },
    { img: Apple, name: 'Soup', info: '120 farmers, available in 6 locations' }
  ];
  const c = products.map((p, index) => (
    <Card key={index}>
      <img src={p.img} alt={`${p.name} icon`} />
      <div>
        <h4>{p.name}</h4>
        <p>{p.info}</p>
        <Button btn="farmer">Find Farmers</Button>
      </div>
    </Card>
  ));

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
  return (
    <ProductContainer>
      <HeaderContainer>
        <h6>What’s trending...</h6>
        <MenuContainer>
          <h5>Popular Items</h5>
          <Direction>
            <ArrowLeftIcon src={ArrowLeft} alt="arrow left icon" onClick={goPrev} />
            <ArrowRightIcon src={ArrowRight} alt="arrow right icon" onClick={goNext} />
          </Direction>
        </MenuContainer>
      </HeaderContainer>
      <CardContainer>
        <Swiper getSwiper={updateSwiper} {...settings}>
          {c}
        </Swiper>
      </CardContainer>
    </ProductContainer>
  );
};

export default Product;
