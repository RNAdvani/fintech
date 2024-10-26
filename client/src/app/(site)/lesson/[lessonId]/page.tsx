
import LessonPage from '@/components/lesson/LessonPage';
import { auth } from '@clerk/nextjs/server';


interface Props {
    params: { lessonId: string };
}



const Page = ({params}:Props) => {
  
  const user = auth()
    const {lessonId} = params

    

  return (
    <LessonPage clerkId={user.userId!} lessonId={lessonId} />
  )
}

export default Page