import React from 'react'
import './footer.css'
import image from '../welcome/logo_transparent.png'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={image} alt=''/>
      <p>© 2023, May Dev. All rights reserved</p>
    </div>
  )
}

export default Footer