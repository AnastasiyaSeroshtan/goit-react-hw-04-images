import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    padding: 20px;
    width: 100vw;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`
export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  &:hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
    outline: none;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 16px;
    width: 20%;
    height: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`