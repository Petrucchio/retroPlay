import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Login from './components/Login';
import Movie from './components/Movie';
import Subscribe from './components/Subscribe';
import {Route ,Routes, BrowserRouter} from 'react-router-dom';
import Create from './components/Create';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/Index" element={<App/>} />
          <Route path="/featured" element={<Movie/>} />
          <Route path='/Subscribe' element={<Subscribe/>}/>
          <Route path='/Create' element={<Create/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

