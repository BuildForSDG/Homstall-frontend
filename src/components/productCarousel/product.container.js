import styled, { css } from 'styled-components';

const ArrowGeneral = css`
  cursor: pointer;
  position: absolute;
  top: -2rem;
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 36.44rem;
  background-color: #faf8f3;
  padding: 2.125rem 5.25rem;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3.438rem;
  margin-bottom: 2.375rem;

  h6 {
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
    color: #ffb84d;
    margin-bottom: 1rem;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 1.625rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;

  h5 {
    font-weight: 500;
    font-size: 1.125rem;
    text-transform: uppercase;
    color: #443e3e;
  }
`;

export const Direction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ArrowLeftIcon = styled.img`
  right: 5%;
  z-index: 100;
  ${ArrowGeneral}
`;
export const ArrowRightIcon = styled.img`
  right: 0;
  z-index: 100;
  ${ArrowGeneral}
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 21.25rem;
`;

export const Card = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  div {
    width: 100%;
    height: 100%;
    padding: 1.125rem 1.875rem;

    h4 {
      font-weight: 500;
      font-size: 1.125rem;
      text-transform: capitalize;
      color: #443e3e;
    }

    p {
      font-size: 12px;
      color: #8a8d8c;
      margin-bottom: 2.063rem;
    }
  }
`;
