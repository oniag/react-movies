import React, { useState } from 'react'
import { Filter } from './styles'
import { useMovie } from '../../../contexts/movie'

const Search = () => {
  const [nameMovie, setNameMovie] = useState([])
  const { searchAPI } = useMovie()

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
        <button type="botton" onClick={() => searchAPI(nameMovie)}>Pesquisar</button>
      </div>
    </Filter>
  )
}

export default Search