import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 3rem;
  border-radius: .60rem;
  height: 250px;
  background-image: url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg');
  background-size: cover;
  background-position: center left;
  h1 {
    color: var(--clr-white);
    max-width: 60rem;
    font-size: 1.8rem;
    font-weight: var(--fw-700);
    margin-bottom: 2rem;
    span {
      display: block;
      font-weight: var(--fw-400);
      font-size: 1.4rem;
    }
  }
  input {
    width: 90%;
    padding-left: .6rem;
    font-style: italic;
    font-weight: var(--fw-400);
    min-height: 2.2rem;
    font-style: italic;
    border: .15rem solid var(--clr-yellow);
    box-shadow: none;
    @media(max-width: 1024px) {
      width: 70%;
    }
  }
  button {
    min-height: 2.60rem;
    border: .15rem solid var(--clr-yellow);
    border-left: none;
    background-color: var(--clr-yellow);
    color: var(--clr-white);
    cursor: pointer;
    @media(max-width: 1024px) {
      min-height: 2.62rem;
    }
  }
`