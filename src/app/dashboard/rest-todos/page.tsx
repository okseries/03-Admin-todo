import prisma from '@/app/lib/prisma'
import { TodoList } from '@/components/Todo/TodoList'
import { TodoGrid } from '@/todos'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Listado de Todos',
  description: 'Manage your todos with ease',


}

const RestTodosPage = async () => {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
  return (
    //  <TodoList/>
    <>

    <TodoGrid todos={todos}/>
    </>
  )
}

export default RestTodosPage
