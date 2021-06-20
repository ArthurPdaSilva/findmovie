import React from 'react';
import { useHistory } from 'react-router';
import './error.css';

export default function Error() {
  const history = useHistory();
  setTimeout(() => {
    history.replace('/')
  }, 5000)

  return (
    <div className='errorContainer'>
      <h1>Página não Encontrada</h1>
      <span>Redirecionando para a Página Inicial</span>
    </div>
  );
}