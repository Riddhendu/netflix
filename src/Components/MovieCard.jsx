import React from 'react'
import './MovieList.css'
export const MovieCard = ({image}) => {
  return (
    <div className='imgmoviespath' >
        <img width='192'  src={"https://image.tmdb.org/t/p/w500"+image}/>
    </div>
  )
}
