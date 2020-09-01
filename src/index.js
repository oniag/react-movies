import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './styles'
import { MovieProvider } from './contexts/movie'

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)