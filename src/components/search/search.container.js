import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
export const SearchContainer = styled.div`
  width: 12.31rem;
  height: 100%;
  margin-left: 2rem;
  position: relative;
  display: flex;
  jsutify-content: center;
  align-items: center;

  input {
    width: 100%;
    height: 2.563rem;
    border-radius: 4.875rem;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(213, 213, 213, 0.8);
    background-color: #fff;
    padding: 11px 15px 11px 2.5rem;
    color: #545d71;

    ::placeholder {
      color: #8c979c;
      font-size: 13px;
      font-weight: 400;
    }

    :focus {
      outline: none;
    }
  }
`;

export const SearchIcon = styled(GoSearch)`
  position: absolute;
  top: 35%;
  left: 10%;
  color: #8c979c;
`;
