import React from 'react';
// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import NotFound from 'pages/NotFound';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

// const createAsyncComponent = path => lazy(() => import(path));

// const Home = createAsyncComponent('../pages/Home/Home.jsx');
// const Movies = createAsyncComponent('../pages/Movies/Movies.jsx');
// const MovieDetails = createAsyncComponent(
//   '../pages/MovieDetails/MovieDetails.jsx'
// );
// const Cast = createAsyncComponent('../components/Cast/Cast.jsx');
// const Reviews = createAsyncComponent('../components/Reviews/Reviews.jsx');
// const NotFound = createAsyncComponent('../pages/NotFound.jsx');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
