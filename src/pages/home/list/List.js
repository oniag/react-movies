import React from 'react'
import { Link } from 'react-router-dom'
import { useMovie } from '../../../contexts/movie'
import { Row, Card, Img, Text, Small } from './styles'

const List = () => {
  const { movies } = useMovie()

  return (
    <>
      <Row>
        {
          movies.map((item) => (
            <Card key={item.imdbID}>
              <Link to={`/details/${item.imdbID}`}>
                <Img src={item.Poster} alt={item.Title} />
                <Text>{item.Title}</Text>
                <Small>{`Lançado em ${item.Year}`}</Small>
              </Link>
            </Card>
          ))
        }
      </Row>
    </>
  )
}

export default List