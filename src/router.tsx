import * as React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search/:term">
        <Search />
      </Route>
    </Routes>
  </BrowserRouter>
);
