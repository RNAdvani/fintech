'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface Option {
  optionText: string
  isCorrect: boolean
  _id: string
}

interface Question {
  _id: string
  questionText: string
  options: Option[]
}

interface QuizData {
  lessonTitle: string
  lessonContent: string
  category: string
  quiz: {
    _id: string
    lesson: string
    category: string
    questions: Question[]
    isMegaQuiz: boolean
  }
}

export default function QuizComponent({ quizData,clerkId }: { quizData: QuizData,clerkId:string }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
const router = useRouter()

  const currentQuestion = quizData?.quiz?.questions[currentQuestionIndex]
  const totalQuestions = quizData?.quiz?.questions?.length

  const handleAnswerSelect = (optionId: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestionIndex] = optionId
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizCompleted(true)
      submitQuizResults()
    }
  }

  const submitQuizResults = async () => {
    try {
        const res = await axios.post(`http://localhost:4000/api/v1/lessons/submit`,{
            quizId: quizData.quiz._id,
            answers: selectedAnswers,
            clerkId
        },{
            headers:{
                'Content-Type':'application/json',
            }
        })
        router.push("/learning")
    } catch (error) {
        console.log('Error submitting quiz:', error)
    }
  }

  if (quizCompleted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Quiz Completed</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-secondary-100">Thank you for completing the quiz!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">{quizData?.lessonTitle}</CardTitle>
        <Progress value={(currentQuestionIndex + 1) / totalQuestions * 100} className="w-full" />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4 text-primary-100">{currentQuestion?.questionText}</h2>
        <RadioGroup onValueChange={handleAnswerSelect} value={selectedAnswers[currentQuestionIndex]}>
          {currentQuestion?.options?.map((option) => (
            <div key={option._id} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={option?._id} id={option?._id} />
              <Label htmlFor={option?._id} className="text-secondary-30000">{option?.optionText}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleNextQuestion} 
          disabled={!selectedAnswers[currentQuestionIndex]}
          className="w-full bg-primary-200 text-primary-100 hover:bg-primary-200"
        >
          {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next Question'}
        </Button>
      </CardFooter>
    </Card>
  )
}