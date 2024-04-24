import React from 'react'
import { Link } from 'react-router-dom'
import DiscoverServices from './DiscoverServices'
import Carousel from '../../components/Carousel'
import Blogs from './Blogs'
import Book from './Book'

const Home = () => {
  return (
    <section>
      <div className='relative text-white bg-slate-500 '>
        <img className='w-full lg:h-screen min-h-[220px] object-cover' src="/assets/images/homeImage.png" alt="background image" />
        <div className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <span className='font-medium lg:text-3xl'>Visit Mountains In</span>
          <h1 className='text-xl md:text-2xl lg:text-4xl text-white font-semibold tracking-widest'>ITALY</h1>
          <Link
            className='px-4 lg:px-6 py-2 lg:py-4 mt-2 mx-2 lg:text-xl block rounded-[10px]
           bg-primary font-medium hover:bg-hover duration-300'
          > See offer</Link>
        </div>
      </div>
      <DiscoverServices />
      <Carousel />
      <Blogs />
      <Book />
    </section >
  )
}

export default Home