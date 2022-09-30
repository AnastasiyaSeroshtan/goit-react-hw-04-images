import styled from "styled-components";

export const SearchForm = styled.form`
    /* position: fixed; */
    display: flex;
    justify-content: center;
    padding: 20px;
    width: 100vw;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`

export const SearchInput = styled.input`
    outline: none;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 16px;
    width: 20%;
    height: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    border-radius: 4px;
`