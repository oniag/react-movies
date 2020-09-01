import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 5rem;
`

export const Infos = styled.div`
`

export const Poster = styled.img`
  width: 300px;
  margin-right: 5rem;
  @media(max-width: 768px) {
    margin: 0 auto;
  }
`

export const Title = styled.h1`
  color: var(--clr-white);
  font-weight: var(--fw-700);
  margin: 0;
`

export const Text = styled.p`

`