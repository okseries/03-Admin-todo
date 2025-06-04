
"use client";
import { AppTooltip } from '@/components';
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Todo } from '@/generated/prisma'

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
    return (
        <div>
            {
                <Card className={`${todo.completed ? 'bg-green-100' : 'bg-red-100'} shadow-md hover:shadow-lg transition-shadow duration-300`}>
                    <CardContent className='flex flex-row  gap-2 items-center'>
                        <AppTooltip title={todo.completed ? 'Marcar como pendiente' : 'Marcar como completado'}>
                            <Checkbox checked={todo.completed} onClick={() => toggleTodo(todo.id, !todo.completed)} className='bg-cyan-500 cursor-pointer text-white' />
                        </AppTooltip>
                        <p>{todo?.description}</p>
                    </CardContent>

                </Card>}
        </div>
    )
}

