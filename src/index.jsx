import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutePage from './route/route';
import ComponentPage from './component';
import RouteToFunction from './route/routeToFunction';
import RouteToClass from './route/routeToClass';
import Prompt from './code/prompt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/undefined" element={<App/>} />
      <Route path="/index" Component={<App/>} />
      <Route path="/home" element={<App/>} />
      <Route path="/route" element={<RoutePage/>} />
      <Route path="/component" element={<ComponentPage/>} />
      <Route path='/routeToFunction' element={<RouteToFunction/>} />
      <Route path='/routeToClass/:id' element={<RouteToClass />} />
      <Route path='/prompt' element={<Prompt />} />
    </Routes>
  </BrowserRouter>
);

//* Important Notes
//! use Component instead of element in Route tag (this is not true, v6 can use element)
//! in Component field, dont use tag, use Component directly instead (use tag in the field of element)
//* in line 23: path='/routeToClass/:id', the id is the parameter passing to the RouteToClass


