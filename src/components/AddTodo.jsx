import React, { useState } from 'react';

const AddTodo = ({ handleAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleAddTodo(newTodo);
        setNewTodo('');
    };

    return (
        <div className="input-container">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={onSubmit}>Add</button>
        </div>
    );
};

export default AddTodo;
