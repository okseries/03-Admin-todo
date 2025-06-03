import { redirect } from 'next/navigation'

const HomePage = () => {

  redirect('/dashboard/todos')
 
}

export default HomePage