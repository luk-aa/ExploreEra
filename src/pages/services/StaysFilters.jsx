import React, { useEffect, useState } from 'react'


import { staysCards } from '../../data';

const StaysFilters = ({ setShowFilters, setFilteredData, showFilters }) => {
  const [checkboxes, setCheckboxes] = useState(0)
  console.log('checkboxes:', checkboxes)
  //
  useEffect(() => {
    const filteredStaysCards = staysCards.filter((card) => {

      console.log(card.rate)

      if (checkboxes && card.rate !== checkboxes) {
        return false
      }

      return true
    })
    setFilteredData(filteredStaysCards)

  }, [checkboxes])


  return (
    <div className={` w-full h-full py-10 lg:pt-0 px-[45px] lg:px-0 left-0 top-0 bg-[#fff6f0] fixed lg:static 
    overflow-y-scroll lg:overflow-visible ${showFilters ? 'block' : 'hidden'} lg:block z-10`}>
      <button
        onClick={() => setShowFilters(false)}
        className='h-11 w-full my-7 flex items-center justify-center 
           rounded-xl bg-primary text-white font-
           medium hover:bg-hover cursor-pointer relative lg:hidden'>
        <img className='absolute left-4 lg:hidden' src="/assets/icons/Arrow_Right_MD.png" alt="arrow-right" />
        <h4>Filter</h4>
      </button>

      {/* START FILTER CHECKBOXES */}

      <div className=' p-6 rounded-lg bg-white flex flex-col gap-5'>
        <h5 className='border-b-[3px] border-primary w-fit'>Filter by:</h5>
        <div>
          <h5>Property rating</h5>
          <ul className='text-text flex flex-col gap-3 mt-2'>
            <li className='flex items-center gap-3'>
              <div
                onClick={() => setCheckboxes(5)}
                className={`w-7 h-7 rounded-md border-[1px] cursor-pointer
                  border-text ${checkboxes === 5 ? 'bg-primary' : 'bg-white'}`}
              ></div>
              <h5>5 Stars</h5>
            </li>
            <li className='flex items-center gap-3'>
              <div
                onClick={() => setCheckboxes(4)}
                className={`w-7 h-7 rounded-md border-[1px] cursor-pointer
                border-text ${checkboxes === 4 ? 'bg-primary' : 'bg-white'}`}
              ></div>
              <h5>4 Stars</h5>
            </li>
            <li className='flex items-center gap-3'>
              <div
                onClick={() => setCheckboxes(3)}
                className={`w-7 h-7 rounded-md border-[1px] cursor-pointer
                border-text ${checkboxes === 3 ? 'bg-primary' : 'bg-white'}`}
              ></div>
              <h5>3 Stars</h5>
            </li>
            <li className='flex items-center gap-3'>
              <div
                onClick={() => setCheckboxes(2)}
                className={`w-7 h-7 rounded-md border-[1px] cursor-pointer
                border-text ${checkboxes === 2 ? 'bg-primary' : 'bg-white'}`}
              ></div>
              <h5>2 Stars</h5>
            </li>
            <li className='flex items-center gap-3'>
              <div
                onClick={() => setCheckboxes(1)}
                className={`w-7 h-7 rounded-md border-[1px] cursor-pointer
                border-text ${checkboxes === 1 ? 'bg-primary' : 'bg-white'}`}
              ></div>
              <h5>1 Star</h5>
            </li>
            <li className='flex items-center gap-3'>
              <div
                onClick={() => setCheckboxes(0)}
                className={`w-7 h-7 rounded-md border-[1px] cursor-pointer
                border-text ${checkboxes === 0 ? 'bg-primary' : 'bg-white'}`}
              ></div>
              <h5>Unrated</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StaysFilters