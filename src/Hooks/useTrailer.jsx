import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../../Utils/Constants'
import { trailerVideos } from '../../Utils/MovieSlice'

export const useTrailer = async (id) => {
    const dispatch = useDispatch()
    const getMovies = async () => {
        const getdata = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS)
       
        const jsondata = await getdata.json()
        

        const trailerdata = jsondata.results.filter(data => data.type == 'Trailer')
        const trailer = trailerdata.length ? trailerdata[0] : jsondata.results[0]
       
        dispatch(trailerVideos(trailer))
        
    }

    useEffect(() => {
        getMovies()
    }, [])

}
