import React from 'react'
import { blogs } from '../../data'

const Blogs = () => {

  const blogCards = blogs.map((blog, index) => (
    <div className='mt-3' key={index}>
      <img src={blog.image} alt="blog-image" />
      <h3 className='my-2'>{blog.title}</h3>
    </div>
  ))

  return (
    <section className='m-[45px] mx-[90px]'>
      <h2 className='mb-3'>Blogs</h2>
      <div className='lg:grid lg:grid-cols-3 lg:gap-5'>
        {blogCards}
      </div>
    </section>
  )
}

export default Blogs