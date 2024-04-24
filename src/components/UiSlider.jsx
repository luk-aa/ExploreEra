import React from 'react'

import Box from '@mui/material/Box';
import Slider, { SliderThumb } from '@mui/material/Slider';


const Stays = ({ min, max, value, setValue }) => {

  const handleChange = (index, newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={{
      width: '100%',
      color: '#FF6700',
      padding: '0 12px 0 12px',
      "& .MuiSlider-thumb": {
        height: 30,
        width: 30,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
      },
    }}>
      <Slider
        size='large'
        min={min}
        max={max}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        color='white'
      />
    </Box>
  );
}

export default Stays