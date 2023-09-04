import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../../Utils/Constants'
import { addMovies } from '../../Utils/MovieSlice'

export const useNowplayingMovies = () => {


    const dispatch = useDispatch()
    const makingApimovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const jsondata = await data.json()
        
        dispatch(addMovies(jsondata.results))
    }
    useEffect(() => {
        makingApimovie()
    }, [])
}