import styled from 'styled-components'

export const FooterPage = styled.footer`
  display: flex;
  justify-content: center;
  padding: .5rem;
  color: var(--clr-white);
  background-color: var(--clr-light-black);
  -webkit-box-shadow: 0 0 20px 0 var(--clr-black-rgba);
  -moz-box-shadow: 0 0 20px 0 var(--clr-black-rgba);
  box-shadow: 0 0 20px 0 var(--clr-black-rgba);
  p {
    font-weight: var(--fw-700);
    text-transform: uppercase;
    font-size: .85rem;
    span {
      font-weight: var(--fw-300);
      color: var( --clr-yellow);
      margin-right: .85rem;
    }
    small {
      font-size: .75rem;
      font-weight: var(--fw-400);
      text-transform: initial;
    }
`