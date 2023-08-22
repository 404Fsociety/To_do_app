import React from 'react'
import './welcome.css'
import image from './logo_transparent.png'
import { Slide } from 'react-reveal';

const Welcome = () => {
  return (
    <div className='welcome' >
      <Slide cascade left>
    <div className='welcome-text'>
        <h1>To-Do App</h1>
        <h3># We made tasks simpler</h3>
        <h4>#Thoughts #Tasks #Ideas </h4>
    </div>
    </Slide>
    <Slide top>
    <div className='welcome-image'>
      <img src={image} alt=''/>
      </div>
      </Slide>
    </div>
  )
}

export default Welcome