import React from 'react'

const About = () => {
  return (
    <section className='mt-[70px] px-5 md:px-[70px] lg:px-[90px] grid lg:grid-cols-2 gap-10'>
      <div className='bg-white p-8 rounded-md'>
        <h1 className='text-3xl'>About us</h1>
        <p className='my-10'>
          At ExploreEra, we understand that every traveler is unique, craving personalized adventures that resonate with their individual spirit of exploration.
          That's why we've crafted a one-stop destination for all your travel needs, offering a diverse array of destinations, activities, and accommodations tailored to your preferences.
          <br />
          <br />
          With ExploreEra, planning your dream vacation is not just easy—it's an adventure in itself. Our user-friendly interface allows you to seamlessly book flights, accommodations, activities, and transportation all in one place, giving you the freedom to focus on what truly matters: creating unforgettable memories with your loved ones.
          <br />
          <br />
          Join us on a journey of discovery, exploration, and endless possibilities. Whether you're a seasoned globetrotter or embarking on your very first adventure, let ExploreEra be your trusted companion in unlocking the wonders of the world. Your next extraordinary travel experience awaits—start exploring today with ExploreEra.
        </p>
      </div>
      <div className='w-full hidden lg:block'>
        <img className='w-full h-full object-cover' src="https://hips.hearstapps.com/hmg-prod/images/large-group-of-happy-friends-in-mountains-area-royalty-free-image-1653422631.jpg?crop=0.668xw:1.00xh;0.0609xw,0&resize=1200:*" alt="travelingImg" />
      </div>
    </section>
  )
}

export default About