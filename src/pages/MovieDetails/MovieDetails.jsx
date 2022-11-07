import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Outlet } from 'react-router-dom';
import { StyledLink } from 'components/Layout/Layout.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmById, setFilmById] = useState(null);

  useEffect(() => {
    (async function () {
      try {
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
      <button type="button"></button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width="100"
          height="150"
          alt={title}
        />
        <div>
          <h2>
            {title} ({Number.parseInt(release_date)})
          </h2>
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
        </div>
        <div>
          <h3>Aditional information</h3>
          <ul>
            <li>
              <StyledLink to="cast">Cast</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="cast"></StyledLink>
            </li> */}
          </ul>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
