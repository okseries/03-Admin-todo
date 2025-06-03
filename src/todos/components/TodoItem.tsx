import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Todo } from '@/generated/prisma'

interface TodoItemProps {
    todo?: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
    return (
        <div>
            {

                <Card>
                    {/* <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardAction>Card Action</CardAction>
                    </CardHeader> */}
                    <CardContent>
                        <p>{todo?.description}</p>
                    </CardContent>
                    {/* <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter> */}
                </Card>}
        </div>
    )
}

