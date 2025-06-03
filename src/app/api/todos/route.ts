import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take) || take <= 0) {
    return NextResponse.json(
      { error: "Invalid 'take' parameter. It must be a positive number." },
      { status: 400 }
    );
  }

  if (isNaN(skip) || skip < 0) {
    return NextResponse.json(
      { error: "Invalid 'skip' parameter. It must be a positive number." },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json({
    data: todos,
  });
}

const postSchema = yup.object({
  description: yup.string().required("Description is required"),
  completed: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const {description, completed} = await postSchema.validate(await request.json());

    const todo = await prisma.todo.create({
      data: {description, completed},
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
