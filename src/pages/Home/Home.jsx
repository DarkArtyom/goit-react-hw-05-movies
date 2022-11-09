import { useState, useEffect } from 'react';
import ListFilm from 'components/ListFilm/ListFilm';
import { fetchTrending } from 'components/Services/Fetches';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async function () {
      try {
        const dataFetch = await fetchTrending(signal);
        if (!dataFetch) {
          return;
        }
        const filmsData = dataFetch.data.results;
        setFilms(p => [...p, ...filmsData]);
      } catch (error) {}
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ListFilm films={films} />
    </main>
  );
};

export default Home;
