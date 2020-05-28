import React from 'react';

import { CategoryCard } from './card.container';
const Card = ({ image, name, info }) => {
  return (
    <CategoryCard>
      {/* <img src={image} /> */}
      <p>{name}</p>
      <p>{info}</p>
    </CategoryCard>
  );
};

export default Card;
