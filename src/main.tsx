import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import Notes from './pages/notes'
import NotFound from './pages/notFound'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<App />}>
       <Route path="notes" element={<Notes />} />
       <Route path="*" element={<Navigate to="/" replace/>} />
      </Route> 
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
