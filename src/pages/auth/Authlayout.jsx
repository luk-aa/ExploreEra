import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"
const Authlayout = () => {
  return (
    <section className='my-20 py-10 px-20 w-[420px] m-auto bg-white rounded-lg'>
      <Outlet />
      <Toaster richColors />
    </section>
  )
}

export default Authlayout