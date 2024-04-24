import React, { useState } from 'react'
import DropdownSelectMenu from '../../components/DropdownSelectMenu'
import { options1, options2, options3, options4 } from '../../data'

const Book = () => {
  // const [active, setActive] = useState(false)
  // const [selected, setSelected] = useState('Your Starting Location')



  return (
    <section>
      <div className='px-[45px] lg:px-[90px] py-4 lg:py-6 bg-[#E0E0E0]'>
        <h2 className=' mb-4'>Ready To Book A Trip?</h2>
        <div className='lg:grid lg:grid-cols-2 lg:gap-5 lg:mb-5'>
          <DropdownSelectMenu
            options={options1}
            name={"Your Starting Location"}
          />
          <DropdownSelectMenu
            options={options2}
            name={"Choose Tour Offer"}
          />
          <DropdownSelectMenu
            options={options3}
            name={"Choose Date"}
          />
          <DropdownSelectMenu
            options={options4}
            name={"Persons"}
          />
        </div>
        <button
          className='px-4 py-2 h-16 w-full text-[22px] 
          font-semibold block rounded-[10px] text-white
          bg-primary hover:bg-hover duration-300'
        >
          Book Now
        </button>
      </div>
    </section>
  )
}

export default Book