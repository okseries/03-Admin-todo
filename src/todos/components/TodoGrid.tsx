"use client";
import { Todo } from "@/generated/prisma";
import { TodoItem } from "./TodoItem";
import * as todosApi from "../helpers/todo"
import { useRouter } from "next/navigation";
import { toggleTodo } from "../actions/todo-actions";

interface TodoGridProps {
  todos?: Todo[];
}
export const TodoGrid = ({ todos }: TodoGridProps) => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-2">
      {
        todos?.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))
      }
    </div>
  )
}
