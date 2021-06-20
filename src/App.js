import React from 'react';
import Routes from './routes';
import MovieProvider from './contexts/movie';

export default function App() {
  return (
    <MovieProvider>
      <div className='app'>
        <Routes/>
      </div>
    </MovieProvider>
  );
}
