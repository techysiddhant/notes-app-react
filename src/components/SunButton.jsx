import React from 'react'
import {ReactComponent as SunIcon} from '../assets/sun-solid.svg';
const SunButton = ({handlemode}) => {
  return (
    <div className='floating-button-mode' onClick={handlemode}>
        <SunIcon/>
    </div>
  )
}

export default SunButton