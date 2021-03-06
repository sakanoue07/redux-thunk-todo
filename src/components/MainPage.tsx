import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/rootStore";
import { boundRequestTodos } from "../store/todo/TodoAction";
import { Todo } from "../store/todo/models/Todo";

export const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boundRequestTodos());
  }, [dispatch]);

  const todos = useSelector((state: AppState) => state.todoReducer.todos);
  const error = useSelector((state: AppState) => state.todoReducer.error);
  return (
    <div>
      <h2>mainpage</h2>
      {todos.length ? (
        <ul>
          todos-list:
          {todos.map((todo: Todo) => (
            <li
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              key={todo.id}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};
