"use client";

import React, { useEffect, useState } from "react";

export interface Todo {
  id: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch('http://localhost:3000/api/todos');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const json = await response.json();
  // Convertir los campos de fecha manualmente
  return json.data.map((todo: any) => ({
    ...todo,
    createdAt: new Date(todo.createdAt),
    updatedAt: new Date(todo.updatedAt),
  }));
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="border-b py-2 flex items-center gap-2">
          <input type="checkbox" checked={todo.completed} readOnly />
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.description}
          </span>
        </div>
      ))}
    </div>
  );
};