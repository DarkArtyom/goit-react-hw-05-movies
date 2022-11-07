import { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [filmById, setFilmById] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const fetchFilmById = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US`
        );
        setFilmById(p => [...p, ...fetchFilmById.data.cast]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  if (!filmById) {
    return;
  }

  return (
    <section>
      <ul>
        {filmById.map(cast => (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt=""
              width="100"
              height="150"
            />
            <p>
              <b>Name:</b> {cast.name}
            </p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
