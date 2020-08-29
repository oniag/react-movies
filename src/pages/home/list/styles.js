import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 2.5rem;
`

export const Card = styled.figure`
  margin-bottom: 2rem;
  margin-left: 0;
  @media(max-width: 1200px) {
    margin: 0 auto;
    margin-bottom: 5rem;
  }
`

export const Img = styled.img`
  width: 12.5rem;
  height: 100%;
  border-radius: .60rem;
`

export const Text = styled.figcaption`
  font-size: .90rem;
  color: var(--clr-white);
  font-weight: var(--fw-700);
  width: 12.5rem;
`

export const Small = styled.small`
  font-size: .75rem;
  color: var(--clr-yellow);
  font-weight: var(--fw-500);
`