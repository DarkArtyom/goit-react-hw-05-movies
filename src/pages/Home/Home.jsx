import { useState, useEffect } from 'react';
import axios from 'axios';
import ListFilm from 'components/ListFilm/ListFilm';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const dataFetch = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=7e0fc0f40a1f522dce260b9a97593bef`
        );
        if (!dataFetch) {
          return;
        }
        console.log(dataFetch.data);
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
