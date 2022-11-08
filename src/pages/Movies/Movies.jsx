import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

import SearchBar from 'components/SearchBar/SearchBar';
import { StyledLink } from 'components/Layout/Layout.styled';

const Movies = () => {
  const [filmName, setFilmName] = useState('');
  const [foundFilms, setFoundFilms] = useState([]);
  const isFirstPage = useRef(true);
  const location = useLocation();

  useEffect(() => {
    (async function () {
      try {
        if (isFirstPage.current) {
          isFirstPage.current = false;
          return;
        }
        if (filmName === '') {
          return;
        }
        const fetchSearchingFilms = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US&query=${filmName}`
        );
        console.log(fetchSearchingFilms);
        setFoundFilms(fetchSearchingFilms.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filmName]);

  const handleSubmitForm = filmName => {
    setFilmName(filmName);
    setFoundFilms([]);
  };

  return (
    <section>
      <SearchBar onInputSubmit={handleSubmitForm} />
      {foundFilms.length > 0 && (
        <ul>
          {foundFilms.map(({ id, title }) => (
            <li key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Movies;
