// import axios from 'axios';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { StyledLink } from 'components/Layout/Layout.styled';
import {
  SectionMovieDetails,
  ContainerMovieDetails,
  InfoFilmBox,
  FilmTitle,
  AditionalList,
  AditionalTitle,
} from './MovieDetails.styled';
import { getFilmById } from 'Services/Fetches';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmById, setFilmById] = useState(null);
  const location = useLocation();
  const fromLocationRef = location.state.from;
  // const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async function () {
      try {
        const fetchFilmById = await getFilmById({ movieId }, signal);
        setFilmById(fetchFilmById.data);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [movieId]);
  if (!filmById) {
    return;
  }

  const { poster_path, release_date, title, vote_average, overview, genres } =
    filmById;

  return (
    <main>
      <SectionMovieDetails>
        <StyledLink to={fromLocationRef}>Go back</StyledLink>
        <ContainerMovieDetails>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            width="200"
            height="300"
            alt={title}
          />
          <InfoFilmBox>
            <FilmTitle>
              {title} ({Number.parseInt(release_date)})
            </FilmTitle>
            <p>
              <b>Rating:</b> {vote_average}
            </p>
            <p>
              <b>Overview:</b> {overview}
            </p>
            <p>
              <b>Genres:</b>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          </InfoFilmBox>
        </ContainerMovieDetails>
        <div>
          <AditionalTitle>Aditional information</AditionalTitle>
          <AditionalList>
            <li>
              <StyledLink to="cast" state={{ from: location.state.from }}>
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink to="reviews" state={{ from: location.state.from }}>
                Reviews
              </StyledLink>
            </li>
          </AditionalList>
        </div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </SectionMovieDetails>
    </main>
  );
};

export default MovieDetails;
