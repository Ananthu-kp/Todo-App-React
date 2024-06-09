import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    const [todos, setTodos] = useState([]);

    const handleAddTodo = (text) => {
        if (text.trim() === '') {
            toast.error('Todo is Empty!!', { autoClose: 1500 });
            return;
        }

        if (todos.some((todo) => todo.text.toLowerCase() === text.trim().toLowerCase())) {
            toast.error('Todo already exists!', { autoClose: 1500 });
            return;
        }

        if (text.trim().length > 25) {
            toast.error('limit Exceed', { autoClose: 1500 });
            return;
        }

        setTodos([{ text, completed: false }, ...todos]);
        toast.success('Todo successfully created!', { autoClose: 1500 });
    };


    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((current, i) => i !== index);
        setTodos(newTodos);
        toast.success('Todo successfully deleted!', { autoClose: 1500 });
    };

    const handleToggleComplete = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const handleEditTodo = (index) => {
        const todo = todos[index];
        Swal.fire({
            title: 'Edit Todo',
            input: 'text',
            inputValue: todo.text,
            showCancelButton: true,
            confirmButtonText: 'Save',
            preConfirm: (newText) => {
                if (newText.trim() === '') {
                    Swal.showValidationMessage('Todo cannot be empty');
                } else if (newText.trim().length > 25) {
                    Swal.showValidationMessage('Todo limit exceed');
                } else {
                    const newTodos = todos.map((todo, i) => {
                        if (i === index) {
                            return { ...todo, text: newText };
                        }
                        return todo;
                    });
                    setTodos(newTodos);
                    toast.success('Todo successfully updated!', { autoClose: 1500 });
                }
            },
        });
    };

    const handleDeleteAllTodos = () => {
        setTodos([]);
        toast.success('All todos deleted!', { autoClose: 1500 });
    };

    return (
        <div className="app">
            <Header /> { }
            <AddTodo handleAddTodo={handleAddTodo} />
            <TodoList
                todos={todos}
                handleToggleComplete={handleToggleComplete}
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
            />
            {todos.length > 0 && (
                <button className="delete-all-btn" onClick={handleDeleteAllTodos}>
                    Delete All Todos
                </button>
            )}
            <ToastContainer />
        </div>
    );
};

export default App;
