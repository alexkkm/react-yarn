import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutePage from './route';
import ComponentPage from './component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/undefined" Component={App} />
      <Route path="/home" Component={App} />
      <Route path="/route" Component={RoutePage} />
      <Route path="/component" Component={ComponentPage} />
    </Routes>
  </BrowserRouter>
);
//! Important Notes
//! use Component instead of element in Route tag
//! in Component field, dont use tag, use Component directly instead



