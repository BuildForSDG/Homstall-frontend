import styled, { css } from 'styled-components';

const ArrowGeneral = css`
  cursor: pointer;
  position: absolute;
  top: 20%;
`;
export const CategoryContainer = styled.div`
  width: 100%;
  height: 23.75rem;
  padding: 1.875rem 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 19.63rem;
  background: #fff;
  padding: 1.25rem 2rem;

  h3 {
    text-transform: uppercase;
    color: #443e3e;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.375rem;
    margin-bottom: 1.25rem;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 13.13rem;
  position: relative;
`;

export const Card = styled.div`
  position: relative;
  img {
    margin-bottom: 1rem;
  }
  p {
    font-size: 12px;
    color: #8a8d8c;
  }
`;

export const MoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
    color: #3a7c78;
    margin-bottom: 0.5rem;
  }
`;

export const ArrowLeftIcon = styled.img`
  left: -2rem;
  z-index: 100;
  ${ArrowGeneral}
`;
export const ArrowRightIcon = styled.img`
  right: -2rem;
  z-index: 100;
  ${ArrowGeneral}
`;
