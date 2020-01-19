import styled from 'styled-components';

export const Submit = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #ffa7c4;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    height: 35px;
    width: 80px;

    &:hover {
        background-color: #e8769c;
        color: #fff;
    }
`;

export const Delete = styled.div`
    align-items: center;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: #ff80b7;
    display: flex;
    color: #fff;
    cursor: pointer;
    height: 30px;
    justify-content: center;
    margin-left: auto;
    width: 30px;

    &:hover {
        background-color: #ff57a0;
    }
`;
