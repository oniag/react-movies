import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Card, Img, Text, Small } from './styles'

const List = () => {
  return (
    <Row>
      <Card>
        <Link to=''>
          <Img src="https://image.tmdb.org/t/p/w220_and_h330_face/knfExByNW2jCwtmIuwYYxzPKpkm.jpg" />
          <Text>Novo mundo</Text>
          <Small>Lançado em 2020</Small>
        </Link>
      </Card>
    </Row>
  )
}

export default List