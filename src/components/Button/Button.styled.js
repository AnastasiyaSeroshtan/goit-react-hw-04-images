import styled from "styled-components";

export const ButtonLoadMore = styled.button`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    border: none;
    width: 150px;
    height: 30px;
    color: #fff;
    border-radius: 8px;
    transition: scale 250ms linear;
    :hover{
      scale: 1.1;
    }
`