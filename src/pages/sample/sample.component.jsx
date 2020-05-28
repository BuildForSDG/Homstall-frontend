import React from 'react';

import CategoryCarousel from '../../components/categoryCarousel/category.component';
import ProductCarousel from '../../components/productCarousel/product.component';
import { SampleContainer } from './sample.container';

const Sample = () => {
  return (
    <SampleContainer>
      <CategoryCarousel></CategoryCarousel>
      <ProductCarousel></ProductCarousel>
    </SampleContainer>
  );
};

export default Sample;
