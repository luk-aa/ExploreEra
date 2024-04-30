import React from 'react'
import { blogs } from '@/data'

const Blogs = () => {

  const blogCards = blogs.map((blog, index) => (
    <div className='mt-3' key={index}>
      <img src={blog.image} alt="blog-image" />
      <h3 className='my-2'>{blog.title}</h3>
    </div>
  ))

  return (
    <section className='mt-[70px] px-10 md:px-[70px] lg:px-[90px]'>
      <h2 className='mb-3'>Blogs</h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {blogCards}
      </div>
    </section>
  )
}

export default Blogs