import React from 'react'
import './cards.css'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Fade } from 'react-reveal';

const Cards = () => {
  return (
    <div className='Cards'>
      <Fade bottom>
        <div className='card1'>
        <PsychologyAltIcon style={{fontSize:"84px",color:"white"}}/>
        <p>What is in your mind ?</p>
        </div>
        </Fade>
        <Fade bottom>
        <div className='card2'>
        <CalendarMonthIcon style={{fontSize:"84px",color:"white"}}/>
        <p>Plan a trip for next month</p>
        </div>
        </Fade>
        <Fade bottom>
        <div className='card3'>
        <PsychologyIcon style={{fontSize:"84px",color:"white"}}/>
        <p>Think about a new project</p>
        </div>
        </Fade>
    </div>
  )
}

export default Cards