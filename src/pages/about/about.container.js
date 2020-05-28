import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 0;
`;

export const Placeholder = styled.div`
  width: 30.19rem;
  height: 37rem;
  background: rgba(255, 184, 77, 0.5);
  position: relative;
  z-index: 20;

  img {
    width: 30.19rem;
    position: absolute;
    top: -3%;
    left: 5%;
  }
`;

export const InfoContainer = styled.div`
  h6 {
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
    color: #3a7c78;
  }

  h2 {
    font-family: Bellefair;
    font-weight: 500;
    font-size: 2.688rem;
    color: #443e3e;
    margin-bottom: 1.563rem;
  }

  p {
    font-weight: 500;
    font-size: 1.125rem;
    color: #3a6b5c;
    margin-bottom: 2.438rem;
  }

  ul {
    li {
      background: url(/img/Quote.svg) no-repeat 7px 7px transparent;
      list-style-type: none;
      margin: 0;
      padding: 0px 0px 1px 4.063rem;
      vertical-align: middle;
      h4 {
        font-weight: 500;
        font-size: 1rem;
        color: rgba(68, 62, 62, 0.84);
      }

      h5 {
        font-weight: 400;
        font-size: 14px;
        color: rgba(68, 62, 62, 0.84);
      }
    }
    margin-bottom: 2.438rem;
  }
`;

export const ActionButtonContainer = styled.div``;
