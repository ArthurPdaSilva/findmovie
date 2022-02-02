import React from 'react';
import Rotas from './routes';
import MovieProvider from './contexts/movie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function App() {
  return (
    <MovieProvider>
      <div className='app'>
        <ToastContainer autoClose={3000} theme='colored'/>
        <Rotas/>
      </div>
    </MovieProvider>
  );
}
