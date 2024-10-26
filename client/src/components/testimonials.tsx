'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "CTO, InnovateTech",
    content: "Incredible user experience and top-notch customer support.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "Founder, StartupX",
    content: "Game-changing features that have boosted our productivity tenfold.",
    avatar: "/placeholder.svg?height=100&width=100"
  }
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-h-screen flex items-center justify-center bg-primary-300 text-primary-400">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-100">What Our Clients Say</h2>
        <div className="relative bg-primary-200 rounded-lg shadow-lg p-8">
          <Quote className="absolute top-4 left-4 text-primary-100 opacity-20 w-16 h-16" />
          <div className="relative z-10">
            <p className="text-lg mb-4">{testimonials[currentIndex].content}</p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-primary-100">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-primary-100 text-primary-200 hover:bg-opacity-80 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-primary-100 text-primary-200 hover:bg-opacity-80 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}