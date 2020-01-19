import React from 'react';
import styled from 'styled-components';

import * as Button from '../Button';

const Item = styled.div`
    align-items: center;
    background-color: #ffa7c4;
    border-radius: 5px;
    display: flex;
    height: 50px;
    margin-bottom: 10px;
    padding: 0 10px;
    width: 300px;
`;

const Content = styled.span`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 220px;
    white-space: nowrap;
`;

const ListItem = (props) => (
    <Item>
        <Content>
            {props.children}
        </Content>
        <Button.Delete
            id={props.id}
            onClick={props.onDeleteClick}>
            X
        </Button.Delete>
    </Item>
)

export default ListItem;
