import React from 'react'
import { useNowplayingMovies } from '../Hooks/useNowplayingMovies'
import { Header } from './Header'
import { MainContainer } from './MainContainer'

export const Browse = () => {
  useNowplayingMovies()
  return (
    <>
     <Header/>
     <MainContainer/>
    </>
  )
}
