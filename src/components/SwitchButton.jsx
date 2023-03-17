import React from 'react'
import {ReactComponent as MoonIcon} from '../assets/moon-solid.svg';
const SwitchButton = ({handlemode}) => {
  return (
    <div className='floating-button-mode' onClick={handlemode}>
        <MoonIcon/>
    </div>
  )
}

export default SwitchButton