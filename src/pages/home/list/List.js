import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Card, Img, Text, Small } from './styles'
import { useMovie } from '../../../contexts/movie'


const List = () => {
  const { movies } = useMovie()

  return (
    <>
      {
        movies.map((item) => (
          <Row>
            <Card>
              <Link to=''>
                <Img src={item.Poster} />
                <Text>{item.Title}</Text>
                <Small>{`Lançado em ${item.Year}`}</Small>
              </Link>
            </Card>
          </Row>
        )
        )
      }
    </>
  )
}

export default List