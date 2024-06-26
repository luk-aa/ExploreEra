import React, { useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SquareX } from 'lucide-react'

// import CloseIconSm from '../../../public/assets/icons/Close_SM.png'


const SelectServices = ({ option, direction, placeholder }) => {
  const [selected, setSelected] = useState(option)

  return (
    <Select>
      <SelectTrigger
        className="w-full h-[56px] px-5 bg-white text-base 
      rounded-xl border-2 border-primary"
      >
        <div className='flex gap-2'>
          <p>{direction}</p>
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent className='bg-white'>
        {option.map((option) => (
          <SelectItem value={option}>{option}</SelectItem>
        ))}
      </SelectContent>
    </Select>

  )
}

export default SelectServices