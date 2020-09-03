import styled from 'styled-components'

export const BgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: var(--clr-black-rgba);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: var(--clr-white);
    font-size: 1.2rem;
  }
`