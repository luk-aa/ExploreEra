import React from 'react'
import { blogs } from '@/data'
import { Link } from 'react-router-dom'

const Blogs = () => {

  const blogCards = blogs
    .slice(0, 3)
    .map((blog, index) => (
      <div className='mt-3' key={index}>
        <img src={blog.image} alt="blog-image" />
        <h3 className='my-2'>{blog.title}</h3>
      </div>
    ))

  return (
    <section className='m-[45px] mx-[90px]'>
      <div className='flex justify-between pr-5'>
        <h2 className='mb-3'>Blogs</h2>
        <Link to='blogs' className='text-primary underline hover:text-hover'>
          See all
        </Link>
      </div>
      <div className='lg:grid lg:grid-cols-3 lg:gap-5'>
        {blogCards}
      </div>
    </section>
  )
}

export default Blogs