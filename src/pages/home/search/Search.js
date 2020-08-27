import React from 'react'
import { Filter } from './styles'

const Search = () => (
  <Filter>
    <div>
      <h1>
        Bem-Vindo(a).
        <span>
          Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
        </span>
      </h1>
    </div>
    <div>
      <input type="text" placeholder="Digite aqui para pesquisar..." />
      <button type="botton">Pesquisar</button>
    </div>
  </Filter>
)

export default Search