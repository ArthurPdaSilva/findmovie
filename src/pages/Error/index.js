import React from 'react';
import { useNavigate } from 'react-router';
import './error.css';

export default function Error() {
  const history = useNavigate();
  setTimeout(() => {
    history('/')
  }, 5000)

  return (
    <div className='errorContainer'>
      <h1>ERROR 404</h1>
      <span>Página não encontrada!</span>
      <span>Redirecionando para a Página Inicial...</span>
    </div>
  );
}