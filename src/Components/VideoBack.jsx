import React from 'react'
import './Videoback.css'
import {  useSelector } from 'react-redux'

import { useTrailer } from '../Hooks/useTrailer'
export const VideoBack = ({ id }) => {
     const trailervideo = useSelector(store => store.movies?.trailerVideo)
     useTrailer(id)
    return (
        <div >
            <iframe className='youtubevideo'  src={"https://www.youtube.com/embed/"+ trailervideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player"   ></iframe>
        </div>
    )
}
