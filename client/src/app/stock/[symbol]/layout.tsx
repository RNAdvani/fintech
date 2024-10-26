import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-screen flex w-full '>
        <Sidebar />
        <MobileNav />
        <div className='overflow-y-scroll no-scrollbar w-full'>
          {children}
        </div>
    </div>
  )
}

export default Layout