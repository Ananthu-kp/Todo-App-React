import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleToggleComplete, handleDeleteTodo, handleEditTodo }) => {
    return (
        <div className="list">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    handleToggleComplete={handleToggleComplete}
                    handleDeleteTodo={handleDeleteTodo}
                    handleEditTodo={handleEditTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
