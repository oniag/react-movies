import styled from 'styled-components'

export const Menu = styled.header`
  display: flex;
  padding: .5rem;
  color: var(--clr-white);
  background-color: var(--clr-light-black);
  -webkit-box-shadow: 0 0 20px 0 var(--clr-black-rgba);
  -moz-box-shadow: 0 0 20px 0 var(--clr-black-rgba);
  box-shadow: 0 0 20px 0 var(--clr-black-rgba);
`

export const Nav = styled.nav`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  p {
    font-weight: var(--fw-700);
    font-size: 1.2rem;
    text-transform: uppercase;
    span {
      font-weight: var(--fw-300);
      color: var( --clr-yellow);
    }
  }
`