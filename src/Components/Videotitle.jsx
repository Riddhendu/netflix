import React from 'react'
import './VideoTitle.css'
export const Videotitle = ({title,overview}) => {
  return (
    <>
     <div className='videotitlemain'>
         <p className='title'>{title}</p>
         <p className='overview'>{overview}</p>
         <div className='videotitelbuton' >
              <button className='play'>Play</button>
              <button className='moreinfo'>More Info</button>
         </div>
     </div>
    </>
  )
}
