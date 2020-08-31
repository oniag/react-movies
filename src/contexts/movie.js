import React, { createContext, useState, useContext } from 'react'
import { API } from '../api/api'

const MovieContext = createContext({ movies: [] })

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])

  const searchAPI = async (nameMovie) => {
    const url = API(`&s=${nameMovie}`)
    const response = await fetch(url)
    const data = await response.json()
    setMovies(data.Search)
  }

  return (
    <MovieContext.Provider value={{ movies, searchAPI }}>
      {children}
    </MovieContext.Provider>
  )
}

export function useMovie() {
  const context = useContext(MovieContext)

  return context
}

