import React from 'react'
import NoteIcon from '../assets/download.svg';
import GoogleIcon from '../assets/google.svg';
const Login = ({loginHandler}) => {
  return (
    <div className="login">
        <h1>Welcome to the Notes App</h1>
          <div>
            
            <img src={NoteIcon} alt="" className='note-icon' />
            <div className='divider'></div>
            <button className='login-btn' onClick={loginHandler}> <img src={GoogleIcon} alt="" className='google-icon' /> Sign</button>
          </div>
        </div>
  )
}

export default Login