// API Key: 7e0fc0f40a1f522dce260b9a97593bef
// 'https://api.themoviedb.org/3/movie/550?api_key=7e0fc0f40a1f522dce260b9a97593bef

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
