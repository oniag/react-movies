import React, { createContext, useState, useContext } from 'react'
import { API } from '../api/api'

const MovieContext = createContext({ movies: [] })

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])

  const searchAPI = async (nameMovie) => {
    if (nameMovie && nameMovie.length > 0) {
      const url = API(`${nameMovie}`)
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'False') {
        alert('Informação não encontrada, tente novamente! 😊')
        setMovies([])
      } else {
        setMovies(data.Search)
      }
    } else {
      alert('Informação não encontrada, tente novamente! 😊')
      setMovies([])
    }
  }

  return (
    <MovieContext.Provider value={{ movies, searchAPI }}>
      { children }
    </MovieContext.Provider>
  )
}

export const useMovie = () => {
  const context = useContext(MovieContext)

  return context
}

