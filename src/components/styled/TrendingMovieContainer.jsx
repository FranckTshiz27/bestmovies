import styled from "styled-components";

export const TrendingMovieContainer = styled.section`
  background: linear-gradient(
      0deg,
      rgba(14, 25, 48, 1) 11%,
      rgba(14, 25, 48, 0.7685324618128502) 45%,
      rgba(14, 25, 48, 0.2531262993478641) 95%
    ),
    url("${({ bg }) => bg}") center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  .movie-title {
    font-size: 3rem;
    line-height: 5rem;
    margin: 0;
    margin-bottom:0.5em;
  }
  .movie-description {
    font-size: 1em;
    font-weight:100;
    width: 70%;
    margin-bottom:2em;
  }
  .movie-description,
  .movie-title {
    color: white;
    text-align: center;
  }
  .date_released{
    padding:1em;
    margin-bottom:0.8em;
    font-size:1.8em;
  }

  @media all and (max-width:763px){
    .movie-title {
      font-size: 1.5rem;
      line-height: 2rem;
      margin: 0;
      margin-bottom:0.2em;
    }
    .date_released{
      display:none;
    }
  }
`;