import { Todo } from "@/generated/prisma";


export const updateTodo = async (id: string, completed: boolean): Promise<Todo> => {
    console.log("Updating todo with id:", id, "to complete:", completed);

    const body = {completed};
    console.log("Request body:", body);
    

    const todo = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json());

    console.log("Todo updated:", todo);
    

    return todo;
  
}


export const createTodo = async (description: string): Promise<Todo> => {

    const body = {description};

    const todo = await fetch('/api/todos', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json());

    return todo;
  
}



export const deleteCompletedTodos = async (): Promise<void> => {
    await fetch('/api/todos', {
        method: "DELETE",
    });
};