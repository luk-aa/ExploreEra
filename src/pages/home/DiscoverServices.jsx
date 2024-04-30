import React, { useState } from 'react'
import { services } from '../../data'

const DiscoverServices = () => {

  const [visible, setVisible] = useState(4)

  const serviceCards = services.slice(0, visible).map((service, index) => (
    <div className='mb-5' key={index}>
      <div className='rounded-lg overflow-hidden max-h-[167px]  '>
        <img className='object-cover w-full h-full object-center' src={service.image} alt="service_image" />
      </div>
      <h2 className='my-2 text-xl font-medium'>{service.title}</h2>
      <p>{service.description}</p>
    </div>
  ))

  const changeCardsQuantity = () => {
    if (visible === 4) {
      setVisible(12)
    } else {
      setVisible(4)
    }
  }

  return (
    <section className='m-[45px] lg:mx-[90px]'>
      <h2 className='text-[22px] font-medium'>Discover Our Services</h2>
      <p className='text-[14px] '>
        ExploreEra provides a one-stop solution for
        individuals seeking well-planned journeys.
        These services include expert advice on destination
        selection, flight and accommodation bookings,
        and customized itineraries to individual preferences.
      </p>
      <div className='mt-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5'>
        {serviceCards}
      </div>
      <button
        onClick={changeCardsQuantity}
        className='text-primary underline hover:text-hover'
      >
        {visible > 4 ? 'Show less' : 'Show more'}
      </button>
    </section>
  )
}

export default DiscoverServices