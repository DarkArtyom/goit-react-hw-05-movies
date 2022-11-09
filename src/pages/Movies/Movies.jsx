import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import SearchBar from 'components/SearchBar/SearchBar';
import { StyledLink } from 'components/Layout/Layout.styled';
import { getFilmByName } from 'components/Services/Fetches';
const Movies = () => {
  const [filmName, setFilmName] = useState('');
  const [foundFilms, setFoundFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async function () {
      try {
        if (filmName === '') {
          return;
        }
        const fetchSearchingFilms = await getFilmByName({ filmName }, signal);
        if (fetchSearchingFilms.data.results.length === 0) {
          alert('Sorry, there are no films with this word');
        } else {
          setFoundFilms(fetchSearchingFilms.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      controller.abort();
    };
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
