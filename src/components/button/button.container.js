import styled, { css } from 'styled-components';

const Search = css`
  width: 7.438rem;
  height: 2.188rem;
  background-color: #3a6b5c;
  border-radius: 3.938rem;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-transform: capitalize;
  color: #fff;
`;

const Farmers = css`
  width: 10.94rem;
  height: 2.188rem;
  background-color: #3a6b5c;
  border-radius: 3.938rem;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-transform: capitalize;
  color: #fff;
`;

const Buying = css`
  width: 10.94rem;
  height: 2.188rem;
  background-color: #fff;
  border: 1px solid #3a6b5c;
  border-radius: 3.938rem;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-transform: capitalize;
  color: #3a6b5c;
`;

export const Button = styled.button`
  ${({ btn }) => (btn === 'search' ? Search : '')}
  ${({ btn }) => (btn === 'farmer' ? Farmers : '')}
  ${({ btn }) => (btn === 'buying' ? Buying : '')}
  :focus {
    outline: none;
  }
`;
