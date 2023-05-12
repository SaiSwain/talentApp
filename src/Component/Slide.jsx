import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import "./styles.css"

function Slide() {
    const [value, setValue] = useState({ min: 0, max: 20 });
    const handleRangeChange = (value) => {
        setValue(value);
      };
      
  return (
    <div>
      <InputRange
  maxValue={20}
  minValue={0}
  value={value}
  onChange={handleRangeChange}
/>
<p className='range'>{value.min}years</p>
<p className='rangeOne'>{value.max}+years</p>
    </div>
  )
}

export default Slide;