import prisma from '@/app/lib/prisma'
import { NewTodo, TodoGrid } from '@/todos'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Listado de Todos',
  description: 'Manage your todos with ease',


}

const RestTodosPage = async () => {

  const todos = await prisma.todo.findMany({ orderBy: { createdAt: 'desc' } });
  return (
    //  <TodoList/>
    <>

    <div className='w-full  mb-4'>
    <NewTodo/>
    </div>

    <TodoGrid todos={todos}/>
    </>
  )
}

export default RestTodosPage
