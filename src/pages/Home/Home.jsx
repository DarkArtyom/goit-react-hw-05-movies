import { useState, useEffect, useRef } from 'react';
import ListFilm from 'components/ListFilm/ListFilm';
import api from 'components/Services/Fetches';

const Home = () => {
  const [films, setFilms] = useState([]);
  const isFirstRender = useRef(true);
  useEffect(() => {
    (async function () {
      try {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }
        const dataFetch = await api.fetchTrending();
        if (!dataFetch) {
          return;
        }
        const filmsData = dataFetch.data.results;
        setFilms(p => [...p, ...filmsData]);
      } catch (error) {}
    })();
  }, []);
  console.log(films);
  return (
    <main>
      <h1>Trending today</h1>
      <ListFilm films={films} />
    </main>
  );
};

export default Home;
