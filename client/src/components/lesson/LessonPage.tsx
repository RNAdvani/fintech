"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import QuizComponent from './QuizComponent'
import { QuizData } from '@/types'


const LessonPage = ({clerkId,lessonId}:{clerkId:string,lessonId:string}) => {

   
    const [quizData, setQuizData] = useState<QuizData | null >()

    const handleGetLesson = async () => {
        try {
            const res = await axios.post(`http://localhost:4000/api/v1/lessons/content`,{
                lessonId,
                clerkId
            },{
                headers:{
                    'Content-Type':'application/json',
                }
            })
            console.log(res.data.data)
            setQuizData(res.data.data)
            console.log(res.data.data.lessonContent.slice(0,-11))
            console.log(res.data.data.lessonContent)
        } catch (error) {
            console.error('Error fetching lesson:', error)
        }
    }

    useEffect(() => {
        handleGetLesson()
    }, [])

  return (
    <div className='flex flex-col gap-4 justify-center w-full items-center'>
        <iframe width="420" height="315" src={`${quizData?.lessonContent}`} ></iframe>
        <QuizComponent quizData={quizData as QuizData} clerkId={clerkId}/>
    </div>
  )
}

export default LessonPage