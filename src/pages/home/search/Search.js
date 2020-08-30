import React, { useState } from 'react'
import { API } from '../../../api/api'
import { Filter } from './styles'

const Search = () => {
  const [nameMovie, setNameMovie] = useState([])
  const [listMovies, setListMovies] = useState([])

  const searchAPI = async () => {
    const url = API(`${nameMovie}`)
    const response = await fetch(url)
    const data = await response.json()
    setListMovies(data)
  }

  return (
    <Filter>
      <div>
        <h1>
          Bem-Vindo(a).
        <span>
            Milhões de Filmes e Séries para descobrir. Explore já.
        </span>
        </h1>
      </div>
      <div>
        <input type="text" placeholder="Digite aqui para pesquisar..." onChange={e => setNameMovie(e.target.value)} />
        <button type="botton" onClick={searchAPI}>Pesquisar</button>
      </div>
    </Filter>
  )
}

export default Search