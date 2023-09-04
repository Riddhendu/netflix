import React from 'react'
import { MovieCard } from './MovieCard'
import './MovieList.css'
export const MovieList = ({title,movies}) => {
  return (
    <div>
         <div className='mainmovielists'>
             <h1>{title}</h1>
             <div  className='posterdivnew '>
                {movies.map((data)=>(
                    <MovieCard image={data.poster_path}/>
                ))}
             
             </div>
         </div>
        
    </div>
  )
}
