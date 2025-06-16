import React, { useRef, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState();
  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: todo, isCompleted: false },
    ]);
    setTodo("");
  };
  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEditTodo = (id) => {
    todoInputRef.current.focus();
    setTodo(todos.find((todo) => todo.id === id).text);
    setEditTodo(id);
  };
  const handleUpdateTodo = () => {
    setTodos(
      todos.map((gettodo) =>
        gettodo.id === editTodo ? { ...gettodo, text: todo } : gettodo
      )
    );
    console.log(todos);
    setEditTodo(null);
    setTodo("");
  };

  const todoInputRef = useRef(null);
  return (
    <div>
      <div>TodoList</div>
      <input
        ref={todoInputRef}
        type="text"
        placeholder="Add a todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      {editTodo ? (
        <button onClick={handleUpdateTodo}>Update</button>
      ) : (
        <button onClick={handleAddTodo}>Add</button>
      )}
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <div>{todo.text}</div>
            <button onClick={() => handleCompleteTodo(todo.id)}>
              Complete
            </button>
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
