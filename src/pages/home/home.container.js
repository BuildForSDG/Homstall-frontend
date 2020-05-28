import styled from 'styled-components';

import Hero from '../../assets/images/home/Hero.svg';

export const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;
export const HeroImage = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.23) 57.81%, rgba(255, 255, 255, 0) 57.82%), url(${Hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

export const HeroInfo = styled.div`
  position: absolute;
  width: 36rem;
  height: 18.44rem;
  left: 5%;
  top: 50%;
  transform: translate(0, -50%);

  h1 {
    color: #443e3e;
    font-size: 3.125rem;
    line-height: 3.125rem;
    font-family: 'Bellefair', serif;
    margin-bottom: 3.125rem;
  }

  h3 {
    color: #3a7c78;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 1rem;
  }

  p {
    color: #5b6062;
    ont-weight: 600;
    font-size: 14px;
    line-height: 1rem;
    margin-bottom: 1rem;
  }
`;

export const SearchContainer = styled.div`
  width: 544px;
  height: 60px;
  background: #ffffff;
  border-radius: 8px;
  padding: 0 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  img {
    width: 1rem;
    position: absolute;
    top: 40%;
    left: 7%;
  }

  span {
    color: #8c979c;
    line-height: 1rem;
    display: inline-block;
  }

  input {
    height: 100%;
    width: 12.5rem;
    border: none;
    padding: 11px 15px 11px 2.5rem;
    box-sizing: border-box;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #8c979c;
      font-size: 11px;
      font-weight: 400;
      line-height: 12px;
      color: rgba(140, 151, 156, 0.9);
    }
  }
`;

export const ArrowContainer = styled.div`
  width: 6.25rem;
  height: 1.5rem;
  position: relative;

  select {
    width: 100%;
    height: 1.5rem;
    font-size: 10px;
    color: rgba(140, 151, 156, 0.9);
    border: none;
    background-color: #fff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    z-index: 100;

    :focus {
      outline: none;
    }
  }

  img {
    position: absolute;
    width: 0.8rem;
    left: 80%;
    z-index: 1;
    cursor: pointer;
  }
`;
