import NextLink from 'next/link'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { MoveLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Unit } from '@/components/learning/Unit'
import { use } from 'react'



// import { getUserProgress } from '@/db/queries/userProgress'
// import { getUnits, getCourseProgress } from '@/db/queries/units'
// import { getLessonPercentage } from '@/db/queries/lessons'

interface Props {
  params: { courseId: string };
}

export default async function Learn({params}:Props) {
  
  const {courseId} = params;

  const user = auth()

  return (
    <div className="">
      <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-background pb-2 text-muted-foreground sm:z-50">
        <Button variant="ghost" size="icon" className="text-inherit" asChild>
          <NextLink href="/learning">
            <MoveLeft className="size-6" strokeWidth={2} />
          </NextLink>
        </Button>
        <h1 className="text-lg font-bold uppercase">
          Hello
          {/* {activeCourse.title} */}
        </h1>
      </div>
      <Unit categoryId={courseId} clerkId={user.userId!} />
    </div>
  )
}
