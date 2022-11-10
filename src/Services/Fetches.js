import axios from 'axios';
import PropTypes from 'prop-types';

export async function fetchTrending(signal) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=7e0fc0f40a1f522dce260b9a97593bef`,
    { signal }
  );
  return response;
}

export async function getFilmById({ movieId }, signal) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US`,
    { signal }
  );
  return response;
}

export async function getFilmByName({ filmName }, signal) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US&query=${filmName}`,
    { signal }
  );
  return response;
}

export async function getFilmCast({ movieId }, signal) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US`,
    { signal }
  );
  return response;
}

export async function getFilmReviews({ movieId }, signal) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US`,
    { signal }
  );
  return response;
}

export async function getFilmByQuery({ query }, signal) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US&query=${query}`,
    { signal }
  );
  return response;
}

getFilmById.propTypes = {
  movieId: PropTypes.number.isRequired,
  signal: PropTypes.object.isRequired,
};
getFilmByName.propTypes = {
  filmName: PropTypes.string.isRequired,
  signal: PropTypes.object.isRequired,
};
getFilmCast.propTypes = {
  movieId: PropTypes.number.isRequired,
  signal: PropTypes.object.isRequired,
};
getFilmReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
  signal: PropTypes.object.isRequired,
};
