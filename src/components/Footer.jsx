import React from 'react'

const Footer = () => {
  return (
    <footer className='px-[74px] lg:px-[90px] pt-10 pb-[10px] bg-secondary mt-5'>
      <section className='lg:grid lg:grid-cols-3 lg:gap-20'>
        <div>
          <h1
            className='text-[28px] text-text font-kalnia'
          >
            ExploreEra
          </h1>
          <h4 className='py-5 text-text text-xl'>
            Travel agency which helps you to plan your perfect holidays
          </h4>
          <h2 className='text-[28px] font-regular'>Follow Us</h2>
          <div className=' flex gap-5 my-5'>
            <img src="assets/icons/facebookIcon.png" alt="facebook" />
            <img src="assets/icons/instagramIcon.png" alt="instagram" />
            <img src="assets/icons/linkedinIcon.png" alt="linkedin" />
          </div>
        </div>
        <div>
          <h2 className='mb-5 text-[28px] font-regular'>Links</h2>
          <ul className='flex flex-col gap-5'>
            <li><h3>Home</h3></li>
            <li><h3>About Us</h3></li>
            <li><h3>Blogs</h3></li>
            <li><h3>Our Services</h3></li>
            <li><h3>Our Offers</h3></li>
          </ul>
        </div>
        <div>
          <h2 className='my-5 text-[28px] font-regular'>Contact Us</h2>
          <ul className='flex flex-col gap-5'>
            <li><h3>ExploreEra@gmail.com</h3></li>
            <li><h3>555111222</h3></li>
          </ul>
          <h2 className='text-[28px] font-regular mt-5'>Subscribe News</h2>
          <form className='w-[250px] flex justify-between gap-2 border-2 rounded-[10px]
          border-text p-3 my-5'>
            <input
              className='outline-none bg-secondary'
              type="email"
              placeholder='Email'
            />
            <button>
              <img src="assets/icons/PaperPlane.png" alt="paper-plane" />
            </button>
          </form>
        </div>
      </section>
      <span className='text-2xl w-fit m-auto flex my-10'>Copyright 2024</span>
    </footer >
  )
}

export default Footer