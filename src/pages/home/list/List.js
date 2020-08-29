import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Card, Img, Text, Small } from './styles'
import Categories from '../categories/Categories'

const List = () => (
  <>
    <Categories />
    <Row>
    <Card>
        <Link to=''>
          <Img src="https://image.tmdb.org/t/p/w220_and_h330_face/knfExByNW2jCwtmIuwYYxzPKpkm.jpg" />
          <Text>Novo mundo</Text>
          <Small>10 de jul de 2020</Small>
        </Link>
      </Card>
      <Card>
        <Link to=''>
          <Img src="https://image.tmdb.org/t/p/w220_and_h330_face/knfExByNW2jCwtmIuwYYxzPKpkm.jpg" />
          <Text>Novo mundo</Text>
          <Small>10 de jul de 2020</Small>
        </Link>
      </Card>
      <Card>
        <Link to=''>
          <Img src="https://image.tmdb.org/t/p/w220_and_h330_face/knfExByNW2jCwtmIuwYYxzPKpkm.jpg" />
          <Text>Novo mundo</Text>
          <Small>10 de jul de 2020</Small>
        </Link>
      </Card>
      <Card>
        <Link to=''>
          <Img src="https://image.tmdb.org/t/p/w220_and_h330_face/knfExByNW2jCwtmIuwYYxzPKpkm.jpg" />
          <Text>Novo mundo</Text>
          <Small>10 de jul de 2020</Small>
        </Link>
      </Card>
      <Card>
        <Link to=''>
          <Img src="https://image.tmdb.org/t/p/w220_and_h330_face/knfExByNW2jCwtmIuwYYxzPKpkm.jpg" />
          <Text>Novo mundo</Text>
          <Small>10 de jul de 2020</Small>
        </Link>
      </Card>
      <Card>
        <Link to=''>
          <Img src="https://image.tmdb.org/t/p/w220_and_h330_face/knfExByNW2jCwtmIuwYYxzPKpkm.jpg" />
          <Text>Novo mundo</Text>
          <Small>10 de jul de 2020</Small>
        </Link>
      </Card>
      <Card>
        <Link to=''>
          <Img src="https://image.tmdb.org/t/p/w220_and_h330_face/knfExByNW2jCwtmIuwYYxzPKpkm.jpg" />
          <Text>Novo mundo</Text>
          <Small>10 de jul de 2020</Small>
        </Link>
      </Card>
      <Card>
        <Link to=''>
          <Img src="https://image.tmdb.org/t/p/w220_and_h330_face/knfExByNW2jCwtmIuwYYxzPKpkm.jpg" />
          <Text>Novo mundo</Text>
          <Small>10 de jul de 2020</Small>
        </Link>
      </Card>
    </Row>
  </>
)

export default List