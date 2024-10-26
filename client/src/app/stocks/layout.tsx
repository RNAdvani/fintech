
import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-screen flex '>
        <Sidebar />
        <MobileNav />
        <div className='overflow-y-scroll no-scrollbar'>
          {children}
        </div>
    </div>
  )
}

export default Layout