import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 5rem;
`

export const Infos = styled.div`
@media(max-width: 1024px) {
  margin-left: 2rem;
  margin-right: 2rem;
}
`

export const Poster = styled.img`
  margin-right: 5rem;
  max-width: 100%;
  @media(max-width: 1024px) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`

export const Title = styled.h1`
  color: var(--clr-white);
  font-weight: var(--fw-700);
  margin: 0;
`

export const Text = styled.p`
  span {
    color: var(--clr-yellow);
  }
`

export const Synopsis = styled.div`
  width: 40rem;
  max-width: 100%;
  @media(max-width: 1024px) {
    width: 100%;
  }
`

export const Back = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  justify-content: center;
  a {
    border: .15rem solid var(--clr-yellow);
    background-color: var(--clr-yellow);
    color: var(--clr-white);
    cursor: pointer;
    border-radius: .60rem;
    width: 15rem;
    text-align: center;
    padding: .5rem;
    font-size: 1.2rem;
    font-weight: var(--fw-500);
    transition: .2s ease-in;
    &:hover {
      background-color: var(--clr-medium-yellow);
    }
  }
`