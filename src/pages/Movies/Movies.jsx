import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { StyledLink } from 'components/Layout/Layout.styled';
import { getFilmByName } from 'Services/Fetches';

const Movies = () => {
  // const [filmName, setFilmName] = useState('');
  const [foundFilms, setFoundFilms] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const filmName = searchParams.get('query') ?? '';

  // useEffect(() => {
  //   const query = searchParams.get('query') ?? '';
  //   setFilmName(query);
  // }, [searchParams]);

  useEffect(() => {
    if (!filmName) return;
    const controller = new AbortController();
    const signal = controller.signal;
    (async function () {
      try {
        if (filmName === '') return;

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
    setSearchParams({ query: filmName });
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
