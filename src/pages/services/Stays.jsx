import React from 'react'

import { staysCards } from '@/data'
import DatePicker from '../../components/DatePicker'
import SelectServices from '@/components/SelectServices'
import StaysFilters from './StaysFilters'
import StaysCard from './StaysCards'


const Stays = () => {
  const [selectedDate, setSelectedDate] = React.useState(null)
  const [searchResults, setSearchResults] = React.useState(false)
  const [showFilters, setShowFilters] = React.useState(false)

  const [filteredData, setFilteredData] = React.useState(staysCards)

  return (
    <section className='mt-6 mb-40'>
      <div className={`${searchResults ? 'hidden' : ''} lg:block`}>
        <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_0.5fr] gap-3 justify-items-stretch'>
          <li>
            <SelectServices
              placeholder="Choose City"
              option={['Tbilisi']}
            />
          </li>
          <li>
            <DatePicker />
          </li>
          <li>
            <SelectServices
              placeholder="Person(s)"
              option={['1 Adult', '2 Adults', '3 Adults']}
            />
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
            <StaysFilters
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              setFilteredData={setFilteredData}
            />

            {filteredData.length > 0
              ? <StaysCard
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

export default Stays

