"use client";
import { Todo } from "@/generated/prisma";
import { TodoItem } from "./TodoItem";
import * as todosApi from "../helpers/todo"
import { useRouter } from "next/navigation";

interface TodoGridProps {
  todos?: Todo[];
}
export const TodoGrid = ({ todos }: TodoGridProps) => {
  const router = useRouter();

  const toggleTodo = async (id: string, completed: boolean) => {
     await todosApi.updateTodo(id, completed);

    // TODO[CRÍTICO]: Importante, ste método sincroniza la vista tras cambios en el backend
    router.refresh();

  }
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
