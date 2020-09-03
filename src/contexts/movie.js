import React, { createContext, useState, useContext } from 'react'
import Overlay from '../components/overlay/Overlay'
import { API } from '../api/api'

const MovieContext = createContext({ movies: [] })

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [overlay, setOverlay] = useState(false)
  const searchAPI = async (nameMovie) => {
    if (nameMovie && nameMovie.length > 0) {
      setOverlay(true)
      const url = API(`${nameMovie}`)
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'False') {
        alert('Informação não encontrada, tente novamente! 😊')
        setOverlay(false)
      } else {
        window.scrollTo(0, 0)
        setMovies(data.Search)
        setOverlay(false)
      }
    } else {
      alert('Informação não encontrada, tente novamente! 😊')
      setMovies([])
      setOverlay(false)
    }
  }

  return (
    <MovieContext.Provider value={{ movies, searchAPI }}>
      { overlay ? <Overlay /> : null }
      { children }
    </MovieContext.Provider>
  )
}

export const useMovie = () => {
  const context = useContext(MovieContext)

  return context
}

