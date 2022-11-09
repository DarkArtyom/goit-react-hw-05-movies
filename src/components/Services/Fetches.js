import axios from 'axios';
import PropTypes from 'prop-types';

async function fetchTrending() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=7e0fc0f40a1f522dce260b9a97593bef`
  );
  return response;
}

const api = { fetchTrending };

export default api;

export async function getFilmById({ movieId }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US`
  );
  return response;
}

export async function getFilmByName({ filmName }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US&query=${filmName}`
  );
  return response;
}

export async function getFilmCast({ movieId }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US`
  );
  return response;
}

export async function getFilmReviews({ movieId }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US`
  );
  return response;
}

getFilmById.propTypes = {
  movieId: PropTypes.number.isRequired,
};
getFilmByName.propTypes = {
  filmName: PropTypes.string.isRequired,
};
getFilmCast.propTypes = {
  movieId: PropTypes.number.isRequired,
};
getFilmReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};
