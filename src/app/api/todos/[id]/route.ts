import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import * as yup from "yup";
import { Todo } from "@/generated/prisma";

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  return todo;
};

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(todo);
}

const patchSchema = yup.object({
  description: yup.string().optional(),
  completed: yup.boolean().optional(),
});

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    console.log("Updating todo with id:", id);
    

    const todo = await getTodo(id);

    if (!todo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    const { description, completed } = await patchSchema.validate(
      await request.json()
    );

    const todoUpdated = await prisma.todo.update({
      where: { id },
      data: {
        description,
        completed,
      },
    });

    console.log("Todo updated:", todoUpdated);
    

    return NextResponse.json(todoUpdated, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  await prisma.todo.delete({ where: { id } });

  return NextResponse.json(
    { message: "Todo deleted successfully" },
    { status: 200 }
  );
}
