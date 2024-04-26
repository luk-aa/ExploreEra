import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import GoToTop from './GoToTop'
import { Toaster } from 'sonner'

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
      <GoToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster richColors />
      <Footer />
    </div>
  )
}

export default Layout