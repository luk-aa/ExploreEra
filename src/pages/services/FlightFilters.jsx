import React, { useEffect, useState } from 'react'

import DownVector from '../../../public/assets/icons/DownVector.png'
import Credit_Card_01 from '../../../public/assets/icons/Credit_Card_01.png'
import Handbag from '../../../public/assets/icons/Handbag.png'
import UiSlider from '../../components/UiSlider'

import { flightCards } from '../../data';

const FlightFilters = ({ setShowFilters, setFilteredData, showFilters }) => {
  const [checkboxes, setCheckboxes] = useState(null)
  const [activeFilter, setActiveFilter] = useState('stops')

  //TAKE OFF TIME from FIRST and SECOND CITY
  const [times, setTimes] = useState([12, 24])
  const [time2, setTime2] = useState([12, 24])

  const [hours, setHours] = useState([3, 30])
  const [price, setPrice] = useState([300, 3000])

  // FILTERING BY CHECKBOXES 'STOPS'
  const filerIsOpen = (index) => {
    setActiveFilter((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };


  //
  useEffect(() => {
    const filteredFlightCards = flightCards.filter((card) => {

      //time[0] is min hour, time[1] is max hour
      if (card.takeOff < times[0] || card.takeOff > times[1]) {
        return false
      }

      //price[0] is min price, price[1] is max price
      if (card.price < price[0] || card.price > price[1]) {
        return false
      }

      //hours[0] is min hour, hours[1] is max hour
      if (card.time < hours[0] || card.time > hours[1]) {
        return false
      }

      if (checkboxes && card.stops !== checkboxes) {
        return false
      }

      return true
    })
    setFilteredData(filteredFlightCards)

  }, [times, hours, price, checkboxes])


  return (
    <div className={` w-full h-full py-10 lg:pt-0 px-[45px] lg:px-0 left-0 top-0 bg-[#fff6f0] fixed lg:static 
    overflow-y-scroll lg:overflow-visible ${showFilters ? 'block' : 'hidden'} lg:block z-10`}>
      <button
        onClick={() => setShowFilters(false)}
        className='h-11 w-full my-7 flex items-center justify-center 
           rounded-xl bg-primary text-white font-
           medium hover:bg-hover cursor-pointer relative lg:hidden'>
        <img className='absolute left-4 lg:hidden' src="assets/icons/Arrow_Right_MD.png" alt="arrow-right" />
        <h4>Filter</h4>
      </button>
      <ul className='p-3 flex flex-col justify-center rounded-lg text-text bg-white'>
        <li className='py-3 mx-3'><h5>Cheapest</h5></li>
        <li className='py-3 mx-3 border-y-2 w-24 border-primary'><h5>Quickest</h5></li>
        <li className='py-3 mx-3'><h5>Best</h5></li>
      </ul>
      <div className='my-6 p-6 rounded-lg bg-white flex flex-col gap-3'>
        <div
          className='flex justify-between cursor-pointer'
          onClick={() => filerIsOpen('stops')}
        >
          <h5>Stops</h5>
          <div className={`${activeFilter.includes('stops') ? 'rotate-180' : ''}`}>
            <img src={DownVector} alt="downVector" />
          </div>
        </div>
        {activeFilter.includes('stops') &&
          <ul className='text-text flex flex-col gap-3'>
            <li className='flex items-center gap-3'>
              <div
                onClick={() => setCheckboxes('direct')}
                className={`w-7 h-7 rounded-md border-[1px] cursor-pointer
                  border-text ${checkboxes === 'direct' ? 'bg-primary' : 'bg-white'}`}
              ></div>
              <h5>Direct</h5>
            </li>
            <li className='flex items-center gap-3'>
              <div
                onClick={() => setCheckboxes('onestop')}
                className={`w-7 h-7 rounded-md border-[1px] cursor-pointer
                  border-text ${checkboxes === 'onestop' ? 'bg-primary' : 'bg-white'}`}
              ></div>
              <h5>One stop</h5>
            </li>
            <li className='flex items-center gap-3'>
              <div
                onClick={() => setCheckboxes('twostops')}
                className={`w-7 h-7 rounded-md border-[1px] cursor-pointer
                  border-text ${checkboxes === 'twostops' ? 'bg-primary' : 'bg-white'}`}
              ></div>
              <h5>Two stops</h5>
            </li>
          </ul>
        }
        <div
          className='flex justify-between cursor-pointer'
          onClick={() => filerIsOpen('times')}
        >
          <h5>Times</h5>
          <div className={`${activeFilter.includes('times') ? 'rotate-180' : ''}`}>
            <img src={DownVector} alt="downVector" />
          </div>
        </div>
        {activeFilter.includes('times') &&
          <div>
            <div>
              <h5>Take off - Tbilisi</h5>
              <div className='flex justify-between my-2'>
                <p>{times[0]}:00</p>
                <p>{times[1]}:00</p>
              </div>
              <UiSlider
                min={12}
                max={24}
                setValue={setTimes}
                value={times}
              />
            </div>
            <div>
              <h5>Take off - Paris</h5>
              <div className='flex justify-between my-2'>
                <p>{time2[0]}:00</p>
                <p>{time2[1]}:00</p>
              </div>
              <UiSlider
                min={12}
                max={24}
                setValue={setTime2}
                value={time2}
              />
            </div>
          </div>
        }

        <div
          onClick={() => filerIsOpen('duration')}
          className='flex justify-between cursor-pointer'
        >
          <h5>Duration</h5>
          <div className={`${activeFilter.includes('duration') ? 'rotate-180' : ''}`}>
            <img src={DownVector} alt="downVector" />
          </div>
        </div>
        {activeFilter.includes('duration') &&
          <div>
            <div className='flex justify-between my-2'>
              <p>{hours[0]} Hours</p>
              <p>{hours[1]} Hours</p>
            </div>
            <UiSlider
              min={3}
              max={30}
              setValue={setHours}
              value={hours}
            />
          </div>
        }
        <div
          onClick={() => filerIsOpen('price')}
          className='flex justify-between cursor-pointer'
        >
          <h5>Price</h5>
          <div className={`${activeFilter === 'price' ? 'rotate-180' : ''}`}>
            <img src={DownVector} alt="downVector" />
          </div>
        </div>
        {activeFilter.includes('price') &&
          <div>
            <div className='flex justify-between my-2'>
              <p>{price[0]}$</p>
              <p>{price[1]}$</p>
            </div>
            <UiSlider
              min={600}
              max={3000}
              setValue={setPrice}
              value={price}
            />
          </div>
        }
        <div
          onClick={() => filerIsOpen('priceCalculator')}
          className='flex justify-between cursor-pointer'
        >
          <h5>Price Calculator</h5>
          <div className={`${activeFilter.includes('priceCalculator') ? 'rotate-180' : ''}`}>
            <img src={DownVector} alt="downVector" />
          </div>
        </div>
        {activeFilter.includes('priceCalculator') &&
          <div>
            <div>
              <div className='flex gap-3 text-text items-center'>
                <img src={Credit_Card_01} alt="credit-card" />
                <h4>Payment method</h4>
              </div>
              <input
                className='outline-none border-[1px] border-text py-2 px-3 my-3'
                type="text"
                placeholder='Choose payment method'
              />
            </div>
            <div>
              <div className='flex gap-3 text-text items-center'>
                <img src={Handbag} alt="credit-card" />
                <h4>Carry-on bag</h4>
              </div>
              <input
                className='outline-none border-[1px] border-text py-2 px-3 my-3'
                type="text"
                placeholder='Select bag(0)'
              />
            </div>
            <div>
              <div className='flex gap-3 text-text items-center'>
                <img src={Handbag} alt="credit-card" />
                <h4>Checked bag</h4>
              </div>
              <input
                className='outline-none border-[1px] border-text py-2 px-3 my-3'
                type="text"
                placeholder='Select bag(0)'
              />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default FlightFilters