import React from 'react'
import DownVector from '../../../public/assets/icons/DownVector.png'
import CloseIconSm from '../../../public/assets/icons/Close_SM.png'
import PlusIcon from '../../../public/assets/icons/Add_Plus.png'
import CaretDown from '../../../public/assets/icons/Caret_Down_MD.png'
import CalendarIcon from '../../../public/assets/icons/Calendar_Days.png'

import FlightCards from './FlightCards'
import FlightFilters from './FlightFilters'
import { flightCards } from '../../data'
import DatePicker from '../../components/DatePicker'
import DropdownSelectMenu from '@/components/DropdownSelectMenu'
import SelectServices from '@/components/SelectServices'


const Flights = () => {
  const [selectedDate, setSelectedDate] = React.useState(null)
  const [searchResults, setSearchResults] = React.useState(false)
  const [showFilters, setShowFilters] = React.useState(false)

  const [filteredData, setFilteredData] = React.useState(flightCards)

  const MyContainer = ({ className, children }) => {
    return (
      <div className='w-screen flex justify-center mt-4'>
        <CalendarContainer className={className}>
          <div>{children}</div>
        </CalendarContainer>
      </div>
    );
  }


  return (
    <section className='mt-6 mb-40'>
      <div className={`${searchResults ? 'hidden' : ''} lg:block`}>
        <ul className='mb-6 flex justify-between text-text font-medium
        lg:justify-start lg:gap-5'>
          <li className='flex items-center gap-1  '>
            <span>One-way</span>
            <span>
              <img src={DownVector} alt="down-vector" />
            </span>
          </li>
          <li className='flex items-center gap-1 '>
            <span>1 Adult</span>
            <span>
              <img src={DownVector} alt="down-vector" />
            </span>
          </li>
          <li className='flex items-center gap-1 '>
            <span>Economy</span>
            <span>
              <img src={DownVector} alt="down-vector" />
            </span>
          </li>
        </ul>

        <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_0.5fr] gap-3 justify-items-stretch'>
          <li>
            <SelectServices
              direction="From"
              option={['Tbilisi']}
            />
          </li>
          <li>
            <SelectServices
              direction="To"
              option={['Paris']}
            />
          </li>
          <li>
            {/* <Calendar /> */}
            <DatePicker />
          </li>
          <li
            onClick={() => setSearchResults(true)}
            className='h-[56px] px-5 flex items-center justify-center 
           rounded-xl bg-primary text-white font-medium hover:bg-hover cursor-pointer
           w-full'
          >
            <button>
              <h4>Search</h4>
            </button>
          </li>
        </ul>
      </div>

      {/* APPEARS AFTER SEARCH IN MOBILE */}
      <div className={` text-text ${!searchResults ? 'hidden' : ''} 
      lg:grid lg:grid-cols-[1fr_3fr] lg:gap-5 lg:mt-10`}>
        <div className='lg:hidden'>
          <div className='flex justify-between font-medium'>
            <h4>Tbilisi-Paris</h4>
            <div
              onClick={() => setSearchResults(false)}
              className='cursor-pointer'
            >
              <img src='assets/images/pencil.png' alt="" />
            </div>
          </div>
          <div>
            <span className='mr-2'>{selectedDate}</span>
            <span>2 Adults</span>
          </div>

          <button
            onClick={() => setShowFilters(true)}
            className='h-11 w-full my-7 flex items-center justify-center 
           rounded-xl bg-primary text-white font-medium hover:bg-hover cursor-pointer'
          >
            <h4>Filter</h4>
          </button>
        </div>
        {searchResults &&
          <>
            <FlightFilters
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              setFilteredData={setFilteredData}
            />

            {filteredData.length > 0
              ? <FlightCards
                filteredData={filteredData}
              />
              : <h2 className='w-fit mx-auto'>No flights found</h2>
            }
          </>
        }

      </div>
    </section >
  )
}

export default Flights

