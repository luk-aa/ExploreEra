import React from 'react'
import { Outlet } from 'react-router-dom'
const Authlayout = () => {
  return (
    <section className='my-10 lg:my-20 py-10 px-10  lg:px-16 max-w-[420px] m-auto bg-white rounded-lg'>
      <Outlet />
    </section>
  )
}

export default Authlayout