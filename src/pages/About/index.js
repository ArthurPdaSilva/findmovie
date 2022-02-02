import React from 'react';
import './about.css';
import img from '../../assets/author.jpg';

export default function About() {
  return (
    <div className="principal">
      <img src={img} alt='author'/>
      <h1>Arthur P. da Silva.</h1>
      <hr/>
      <p>
        Venho estudando programação a 4 anos; 
        tendo conhecimentos em: HTML, CSS, Javascript, React JS e Node.
        Atualmente estou tendo como alvo de estudo React JS, Node JS e Java. 
        Fui monitor bolsista da disciplina de Programação I no IFPB.
      </p>
    </div>
  );
}