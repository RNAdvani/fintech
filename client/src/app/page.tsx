import React from 'react'
import { User } from '@my-org/types'
import LandingPage from '@/components/app-page'
import Component from '@/components/testimonials'
import ChatbotModal from '@/components/shared/Chat'

const Home = () => {
  return (
    <div><LandingPage/><Component/><ChatbotModal/></div>
  )
}

export default Home