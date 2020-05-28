import styled, { css } from 'styled-components';

const ArrowGeneral = css`
  cursor: pointer;
`;

export const TestimonialContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 39.5rem;
  background: #faf8f3;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position relative;
`;

export const CardContainer = styled.div`
  width: 855px;
  height: 367px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 3rem 1rem 1rem;
  margin-bottom: 2rem;

  img {
    margin-right: 2rem;
  }
`;

export const CardContent = styled.div`
  h4 {
    font-family: Bellefair;
    font-weight: 100;
    font-size: 1.563rem;
    color: #3a6b5c;
    margin: 3rem 0 2rem 0;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #8a8d8c;
    margin-bottom: 2.063rem;
  }

  a {
    font-weight: 500;
    font-size: 13px;
    color: #3a6b5c;
    text-decoration: none;
  }
`;

export const Navigation = styled.div`
  position: relative;
`;

export const ArrowLeftIcon = styled.img`
  ${ArrowGeneral}
`;
export const ArrowRightIcon = styled.img`
  ${ArrowGeneral}
`;

export const QuotesIcon = styled.img`
  position: absolute;
  top: -5%;
  right: 10%;
`;
