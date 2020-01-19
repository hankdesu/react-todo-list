import React from 'react';
import styled from 'styled-components';

import * as Input from '../../Components/Input';
import * as Button from '../../Components/Button';
import ListItem from '../../Components/ListItem';

import useInputState from '../../Hooks/useInputState';
import useTodoState from '../../Hooks/useTodoState';

const Container = styled.div`
    align-items: center;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    width: 400px;
`;

const ListContainer = styled.div`
    box-sizing: border-box;
    height: 400px;
    overflow: scroll;
    overflow-x: hidden;
    width: 400px;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
        display: none;
      }
`;

const TodoListContainer = (props) => {
    const { inputValue, onInputChange, resetInputValue } = useInputState();
    const { todos, addTodo, removeTodo } = useTodoState();
    
    const onSubmitClick = () => {
        addTodo(inputValue);
        resetInputValue();
    }

    const renderTodos = () => {
        return todos.map((todo, index) => (
            <ListItem
                key={`todo-${index}`}
                onDeleteClick={() => removeTodo(index)}>
                {todo.data}
            </ListItem>
        ))
    }

    return (
        <Container>
            <InputContainer>
                <Input.Default onChange={onInputChange} value={inputValue} />
                <Button.Submit onClick={onSubmitClick}>Submit</Button.Submit>
            </InputContainer>
            <ListContainer>
                {renderTodos()}
            </ListContainer>
        </Container>
    );
}

export default TodoListContainer;
