import React from 'react'

const Header = ({logoutHandler}) => {
  return (
    <div className='app-header'>
        <h1>Notes List</h1>
        <button onClick={logoutHandler}>Sign Out</button>
    </div>
  )
}

export default Header