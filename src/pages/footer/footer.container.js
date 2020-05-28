import styled from 'styled-components';

export const FooterContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: 20.69rem;
  background: #3a6b5c;
  padding: 5.625rem 2rem 1.125rem 2rem;
  position: relative;

  h4 {
    margin-bottom: 1rem;
  }

  li {
    font-size: 13px;
    font-weight: 200;
    color: #ffffff;
    cursor: pointer;

    :not(:last-child) {
      margin-bottom: 0.4rem;
    }
  }
`;

export const FruitImg = styled.img`
  position: absolute;
  top: -3rem;
  right: 0;
`;
