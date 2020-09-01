import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { API_DETAILS } from '../../api/api'
import { Content, Infos, Poster, Title, Text } from './styles'

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
    <Content>
        <Poster src={details.Poster} alt={details.Title} />
        <Infos>
          <Title>{details.Title} <small>({details.Year})</small></Title>
          <Text>{details.Genre}</Text>
          <Text>{details.Runtime}</Text>
          <Text>
            {details.Plot}
          </Text>
        </Infos>
    </Content>
  )
}

export default Details