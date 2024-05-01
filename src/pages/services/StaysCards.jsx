import React from 'react'

const StaysCard = ({ filteredData }) => {
  const [visible, setVisible] = React.useState(5)

  const StaysCardsMap = filteredData
    .slice(0, visible)
    .map((card) => {
      return (
        <div
          key={card.id}
          className='grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-5 p-2 lg:px-8 lg:py-10 mb-5 rounded-lg bg-white'
        >
          <div className='w-full max-h-[250px] rounded-lg overflow-hidden'>
            <img
              className='w-full h-full object-cover'
              src={card.image}
              alt="propertyImg"
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='lg:flex justify-between'>
              <div className='flex flex-col gap-1 lg:gap-2'>
                <h2>{card.name}</h2>
                <h4>{card.location}</h4>
                <p>{card.distance} away from center</p>
                <p className='text-sm'>{card.description}</p>
              </div>
              <div className='mt-2 lg:mt-0 lg:text-right flex flex-col gap-1 lg:gap-2 flex-[300px] '>
                <div className='flex gap-2 lg:block'>
                  <p>Rating:</p>
                  <div className='flex lg:justify-end gap-2 '>
                    {Array(card.rate).fill(<span>
                      <img className='w-6' src="/assets/icons/Star 5.png" alt="starImg" />
                    </span>)}
                  </div>
                </div>
                <div className='flex gap-2 lg:block'>
                  <p>Price:</p>
                  <h4>{card.price}$</h4>
                </div>
              </div>
            </div>
            <button className='bg-primary hover:bg-hover h-10 mt-2 rounded-2xl w-full text-white'>Show Details</button>
          </div>
        </div>
      )
    })

  return (
    <section>
      {StaysCardsMap}

      {filteredData.length > visible &&
        <button
          className='w-full h-12 bg-primary hover:bg-hover rounded-2xl text-white'
          onClick={() => setVisible(prev => prev + 5)}>
          Show More</button>
      }
    </section>
  )
}

export default StaysCard