import styled from 'styled-components'

export const Options = styled.div`
  border-top: .1rem solid var(--clr-medium-black);
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow: auto;
    list-style-type: none;
    padding-left: 0;
    padding-bottom: 1.2rem;
    border-bottom: .1rem solid var(--clr-medium-black);
    li {
      white-space: nowrap;
      border-bottom: 1px solid transparent;
      small {
        cursor: pointer;
        font-size: .95rem;
        transition: .25s ease-out;
        text-transform: uppercase;
        font-weight: var(--fw-400);
        &:hover {
          color: var(--clr-yellow);
        }
      }
    }
    li + li {
      margin-left: 2rem;
      &::before {
        content: '/';
        position: relative;
        right: 14px;
      }
    }
    .active {
      color: var(--clr-yellow);
      border-bottom: 1px solid var(--clr-yellow);
    }
    @media(max-width: 1024px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }  
`

export const Arrow = styled.div`
  display: none;
  font-size: 1.5rem;
  text-align: right;
  position: relative;
  animation: run 1.5s infinite;
  @media(max-width: 1024px) {
    display: block;
    margin-right: 1rem;
  }
`