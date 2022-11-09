import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

import SearchBar from 'components/SearchBar/SearchBar';
import { StyledLink } from 'components/Layout/Layout.styled';
import { getFilmByName } from 'components/Services/Fetches';
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
        const fetchSearchingFilms = await getFilmByName({ filmName });
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
