import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Todo } from '@/generated/prisma'

interface TodoItemProps {
    todo?: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
    return (
        <div>
            {

                <Card className={`${todo?.completed ? 'bg-green-100' : 'bg-red-100'} shadow-md hover:shadow-lg transition-shadow duration-300`}>
                    {/* <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardAction>Card Action</CardAction>
                    </CardHeader> */}
                    <CardContent  className='flex flex-row  gap-2 items-center'> 
                        <Checkbox />
                        <p>{todo?.description}</p>
                    </CardContent>
                    {/* <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter> */}
                </Card>}
        </div>
    )
}

