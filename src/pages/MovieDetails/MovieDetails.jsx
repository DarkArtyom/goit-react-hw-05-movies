import axios from 'axios';
import { Suspense } from 'react';
import { useState, useEffect, useRef } from 'react';
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

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmById, setFilmById] = useState(null);
  const isFirstPage = useRef(true);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    (async function () {
      try {
        if (isFirstPage.current) {
          isFirstPage.current = false;
          return;
        }
        const fetchFilmById = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US`
        );
        setFilmById(fetchFilmById.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  if (!filmById) {
    return;
  }

  const { poster_path, release_date, title, vote_average, overview, genres } =
    filmById;

  return (
    <main>
      <SectionMovieDetails>
        <StyledLink to={backLinkHref}>Go back</StyledLink>
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
              <StyledLink to="cast">Cast</StyledLink>
            </li>
            <li>
              <StyledLink to="reviews">Reviews</StyledLink>
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
