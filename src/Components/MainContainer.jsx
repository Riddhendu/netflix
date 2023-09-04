import React from 'react'
import { useSelector } from 'react-redux'
import { SecondaryContainer } from './SecondaryContainer'

import { VideoBack } from './VideoBack'
import { Videotitle } from './Videotitle'

export const MainContainer = () => {
    const moviess = useSelector((store)=>store.movies?.nowPlayingMovies)
   
    if(!moviess) return;
    let mainMovies = moviess[0]
   
    const {title,overview,id} = mainMovies
  return (
    <>
     <div>
         <VideoBack id={id}/>
         <Videotitle title={title} overview={overview} />
         <SecondaryContainer/>
     </div>
    </>
  )
}
