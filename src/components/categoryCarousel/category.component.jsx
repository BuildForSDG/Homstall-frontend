import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import ArrowLeft from '../../assets/images/home/arrow-left.svg';
import ArrowRight from '../../assets/images/home/arrow-right.svg';
import More from '../../assets/images/home/more.svg';
import Livestock from '../../assets/images/home/livestock.png';
import { settings } from '../../shared/data';
import {
  CategoryContainer,
  CarouselContainer,
  CardContainer,
  ArrowLeftIcon,
  ArrowRightIcon,
  MoreContainer,
  Card
} from './category.container';

const Category = () => {
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

  const products = [
    { img: Livestock, name: 'Fruits', info: 'Apples, Pineapples, Pawpaw, Mangoes, Oranges, Bannana....' },
    { img: Livestock, name: 'Livestocks', info: 'Goat, Sheep, Cattle, Ram, Pgs, Rabbit, Snail, Bush meat, Dogs, ...' },
    {
      img: Livestock,
      name: 'Poultry',
      info: 'Chicken, Eggs, Duck, Broilers, Gizzard, Turkey, Quail eggs, Chicken wings, ...'
    },
    { img: Livestock, name: 'Vegetables', info: 'Carrot, Green beans, Ugu leaves, Onion, Pepper, Okro, Tomatoes, ...' },
    {
      img: Livestock,
      name: 'Fish & Seafood',
      info: 'Carrot, Green beans, Ugu leaves, Onion, Pepper, Okro, Tomatoes, ...'
    },
    { img: Livestock, name: 'Crops', info: 'Carrot, Green beans, Ugu leaves, Onion, Pepper, Okro, Tomatoes, ...' },
    { img: Livestock, name: 'Soup', info: 'Carrot, Green beans, Ugu leaves, Onion, Pepper, Okro, Tomatoes, ...' }
  ];
  const c = products.map((p, index) => (
    <Card key={index}>
      <img src={p.img} alt={`${p.name} icon`} />
      <MoreContainer>
        <h4>{p.name}</h4>
        <img src={More} alt="read more icon" style={{ cursor: 'pointer' }} />
      </MoreContainer>
      <p>{p.info}</p>
    </Card>
  ));
  return (
    <CategoryContainer>
      <CarouselContainer>
        <h3>Shop by Category</h3>
        <CardContainer>
          <ArrowLeftIcon src={ArrowLeft} alt="arrow left icon" onClick={goPrev} />
          <ArrowRightIcon src={ArrowRight} alt="arrow right icon" onClick={goNext} />
          <Swiper getSwiper={updateSwiper} {...settings}>
            {c}
          </Swiper>
        </CardContainer>
      </CarouselContainer>
    </CategoryContainer>
  );
};

export default Category;
