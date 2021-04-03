 import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/"exact component ={Home}/>
    <Route path="/post/:id"exact component ={Post}/>
  </BrowserRouter>
);

export default Routes;