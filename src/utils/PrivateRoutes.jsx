import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const session = localStorage.getItem('session')
  return (
    <div>
      {session ? <Outlet /> : <Navigate to='/signin' />}
    </div>
  )
}

export default PrivateRoutes