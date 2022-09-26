import styled from 'styled-components'

export const MovieListContainer = styled.div`
  h1{
    display: flex;
  }
  .section{
    display: flex;
    flex-direction: column;
  }
  
  .movies{
    padding: 15px;
    display: flex;
    gap:  2rem;
  } 
  
  .movie{
    transition: transform 450ms;
    &:hover{
      transform: scale(1.10)
    }
  }
  
  .list{
    display: flex;
    align-items: center;
    gap: 20px;
  }
`