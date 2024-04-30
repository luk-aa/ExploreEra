import React from 'react'
import { offers } from '@/data'

const Offers = () => {

  const blogCards = offers.map((blog, index) => (
    <div className='mt-3' key={index}>
      <div className='w-full max-h-[200px] overflow-hidden flex justify-center items-center rounded-lg'>
        <img className='w-full h-full object-cover' src={blog.image} alt="blog-image" lazyLoad />
      </div>
      <h3 className='my-2'>{blog.title}</h3>
    </div>
  ))

  return (
    <section className='mt-[70px] px-10 md:px-[70px] lg:px-[90px]'>
      <h2 className='mb-3'>Our Offers</h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {blogCards}
      </div>
    </section>
  )
}

export default Offers