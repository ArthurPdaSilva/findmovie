import React from 'react';
import Routes from './routes';
import MovieProvider from './contexts/movie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function App() {
  return (
    <MovieProvider>
      <div className='app'>
        <Routes/>
        <ToastContainer autoClose={3000}/>
      </div>
    </MovieProvider>
  );
}
