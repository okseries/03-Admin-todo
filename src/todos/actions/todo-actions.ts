"use server";

import prisma from "@/app/lib/prisma";
import { Todo } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

export const addTodo = async (description: string) => {
  try {
    await prisma.todo.create({
      data: { description },
    });

    revalidatePath("/dashboard/server-todos");
  } catch (error) {
    return {
      message: "Error al crear la tarea",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export const toggleTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    throw new Error("Todo not found");
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed },
  });

  revalidatePath("/dashboard/server-todos");

  return updatedTodo;
};

export const deleteCompleted = async (): Promise<void> => {
  await prisma.todo.deleteMany({
    where: { completed: true },
  });

  revalidatePath("/dashboard/server-todos");
};
