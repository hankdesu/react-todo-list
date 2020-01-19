import { useState } from 'react';

export const useTodoState = () => {
    const [todos, setTodos] = useState([]);

    return {
        todos,
        addTodo: data => {
            const todo = { data };
            setTodos([...todos, todo]);
        },
        removeTodo: todoIndex => {
            const filterTodos = todos.filter((_, index) => index !== todoIndex);
            setTodos(filterTodos); 
        }
    }
}

export default useTodoState
