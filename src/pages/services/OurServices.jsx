import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
const activeStyles = {
  color: 'white',
  backgroundColor: '#FF6700',
}
const OurServices = () => {

  const linkStyles = ' w-full lg:w-auto lg:px-5 justify-center py-3  text-text font-medium text-xl text-center rounded-2xl hover:bg-primary hover:text-white duration-300'

  return (
    <section className='mt-[70px] px-[45px] lg:mx-[45px] lg:mt-[110px]'>
      <nav
        className='flex justify-around lg:justify-start gap-3'
      >
        <NavLink
          to='.'
          end
          className={linkStyles}
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Flights
        </NavLink>
        <NavLink
          to='stays'
          className={linkStyles}
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Stays
        </NavLink>
        {/* <NavLink
          className={linkStyles}
        >
          Car Rental
        </NavLink> */}
      </nav>
      <Outlet />
    </section>
  )
}

export default OurServices