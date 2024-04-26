import React from 'react'

const FlightCards = ({ filteredData }) => {

  const FlightCardsMap = filteredData.map((card, index) => {
    return (
      <div
        className='p-3 my-6 lg:px-16 lg:py-10 lg:mt-0 text-center bg-white rounded-lg lg:flex lg:justify-between'
        key={index}>
        <div className='flex gap-3 lg:w-full justify-around lg:justify-between lg:items-center lg:mr-10'>
          <div className='flex flex-col items-center gap-3 text-xs'>
            <img className='w-8 lg:w-14' src="assets/images/gairlines.png" alt="airlinesLogo" />
            <span>Georgian <br className='lg:hidden block' /> Airlines</span>
          </div>
          <div className='flex flex-col justify-around lg:justify-between lg:gap-3'>
            <div className='flex gap-12 lg:gap-28'>
              <h4>Take off</h4>
              <h4>Landing</h4>
            </div>
            <div className='flex items-center gap-2 text-base'>
              <span>{card.takeOff}:00</span>
              <div className='w-16 md:w-28 lg:w-32'>
                <img src={card.stopImg} alt="stops" />
              </div>
              <span>{card.landing}:00</span>
              <p className=' opacity-50'>{card.time} Hours</p>
            </div>
          </div>
        </div>
        <div className=' lg:w-44'>
          <h4 className='my-2.5 lg:my-0'>Price: {card.price}$</h4>
          <span className='w-full h-[2px] my-3 bg-text hidden lg:block'></span>
          <button className='w-full py-2 text-sm rounded-lg bg-[#FF8C3E] hover:bg-hover  '><h3>Viev Deal</h3></button>
        </div>
      </div>
    )
  })

  return (
    <section>
      {FlightCardsMap}

      {/* <button className='h-11 w-full my-7 flex items-center justify-center 
           rounded-xl bg-primary text-white font-medium hover:bg-hover cursor-pointer'>
        <h3 className='text-white'>Show More Results</h3>
      </button> */}
    </section>
  )
}

export default FlightCards