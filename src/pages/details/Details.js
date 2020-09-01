import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { API_DETAILS } from '../../api/api'
import { Content, Infos, Poster, Title, Text, Synopsis, Back } from './styles'

const Details = () => {
  const { id } = useParams()
  const history = useHistory()
  const [details, setDetails] = useState([])

  const getDetails = async () => {
    if (id) {
      const url = API_DETAILS(id)
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'False') {
        alert('Informação não encontrada, você será redirecionado! 😊')
        history.push('/')
      } else {
        setDetails(data)
        console.log(data)
      }
    } else {
      alert('Informação não encontrada, você será redirecionado! 😊')
      history.push('/')
    }
  }

  useEffect(() => {
    async function renderDetails() {
      await getDetails()
    }
    renderDetails()
  })

  return (
    <>
      <Content>
        <Poster src={details.Poster} alt={details.Title} />
        <Infos>
          <Title>{details.Title} <small>({details.Year})</small></Title>
          <Text><span>Gênero:</span> {details.Genre}</Text>
          <Text><span>Duração:</span> {details.Runtime}</Text>
          <Text><span>Linguagens:</span> {details.Language}</Text>
          <Text><span>Produção:</span> {details.Production}</Text>
          <Text><span>Diretor:</span> {details.Director}</Text>
          <Text><span>Atores: </span>{details.Actors}</Text>
          <Synopsis>
            <Text><span>Sinopse:</span></Text>
            <Text>
              {details.Plot}
            </Text>
          </Synopsis>
        </Infos>
      </Content>
      <Back>
        <Link to="/">Voltar</Link>
      </Back>
    </>
  )
}

export default Details