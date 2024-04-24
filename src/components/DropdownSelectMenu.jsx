import React, { useState } from 'react'

const DropdownSelectMenu = ({ options, name }) => {

  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState(name)


  const handleClick = (option) => {
    setSelected(option)
    setActive(false)
  }

  const optionsMap = options.map((option, index) => (
    <option
      className='h-[51px] flex items-center border-t-[1px]
       border-text border-opacity-60 cursor-pointer
        hover:bg-secondary'
      key={index}
      value={option}
      onClick={() => handleClick(option)}
    >
      {option}
    </option>
  ))
  return (
    <>
      <div className={`my-[12px] lg:my-0 rounded-lg relative bg-white ${active && 'rounded-b-none'}`}>
        <div
          className='h-12 px-3 flex justify-between items-center cursor-pointer '
          onClick={() => setActive(!active)}
        >
          <h3 className='text-base  '>{selected}</h3>
          <div className={`w-8 h-8 flex justify-center items-center ${active && 'rotate-180'} duration-100`}>
            <img className='' src="/assets/icons/UpVector.png" alt="up-vector" />
          </div>
        </div>
        {active && <ul className={`px-3 w-full absolute z-10 bg-white
         rounded-b-lg ${options.length > 6 && 'overflow-y-scroll h-[300px]'}`}>
          {optionsMap}
        </ul>}
      </div>
    </>
  )
}

export default DropdownSelectMenu