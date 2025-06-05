
"use client";
import { AppTooltip } from '@/components';
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Todo } from '@/generated/prisma'
import {startTransition, useOptimistic} from 'react';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
    const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(todo, (state, newCompleted: boolean)=>({...state, completed: newCompleted}));

    const onToggleTodo = async ()=>{
        try {
            startTransition(() =>  toggleTodoOptimistic(!todoOptimistic.completed))
           
            await toggleTodo(todoOptimistic.id, !todoOptimistic.completed);
        } catch (error) {
           startTransition(() =>  toggleTodoOptimistic(!todoOptimistic.completed)) // Revert the optimistic update
        }
    }


    return (
        <div>
            {
                <Card className={`${todoOptimistic.completed ? 'bg-green-100' : 'bg-red-100'} shadow-md hover:shadow-lg transition-shadow duration-300`}>
                    <CardContent className='flex flex-row  gap-2 items-center'>
                        <AppTooltip title={todoOptimistic.completed ? 'Marcar como pendiente' : 'Marcar como completado'}>
                            <Checkbox checked={todoOptimistic.completed} onClick={onToggleTodo} className='bg-cyan-500 cursor-pointer text-white' />
                        </AppTooltip>
                        <p>{todoOptimistic?.description}</p>
                    </CardContent>

                </Card>}
        </div>
    )
}

