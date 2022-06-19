import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Movies() {
  const movies = useSelector(selectMovies);

  console.log("this is movies", movies);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={`${movie.title}'s title`} />
              </Link>
            </Wrap>
          ))}
        {/* <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6FB49579CE66FD924D7C91DFF86F354DFE10AD56446002E98C1E40B3FD2C7D3F/scale?width=800&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/33B620B449020876DE7DA189C4F91DAEDA9D4E1250901C8AC38C08BF2E08D23B/scale?width=800&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9434163BBCB6B4538F126FB7AB6BE3924C684EE65BC67B8AEA16F3F9FECBB364/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BF3DF93A4494810A2F9572FF510F0BF85C631D1D747AC0ADDC97D4D21A593C20/scale?width=800&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/53688B670A9027EA826554A2B3037ECB848398BF1EF9A4F9BC857CB2B271E47A/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DEFF121A9A45FE04D029BFB8A32AE802D1740A8AF7A7ED578F99D237ABE53F95/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/40AF23095A7A1B0C46F854B7C11411C0D5EB693C16699D4B76DC88A6EEFF2AB3/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal" />
        </Wrap> */}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  h4 {
    letter-spacing: 3.5px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
