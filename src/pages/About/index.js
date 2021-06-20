import React from 'react';
import './about.css';
import img from '../../assets/author.jpg';

export default function About() {
  return (
    <div className="principal">
      <img src={img} alt='author'/>
      <h1>Criador: Arthur P. da Silva.</h1>
      <hr/>
      <p>
        Tenho 2 anos como programador Web, com conhecimentos de HTML e CSS, Javascript, React JS e React Native. Recém formado na Escola Cidadã Técnica Inácio Antonino, e cursando, atualmente, Instituto Federal de Educação, Ciência e Tecnologia da Paraíba – IFPB. Estagiei na Empresa de Comercialização de Eletrônicos. Lojas Icarlos, em Serra Branca - Paraíba, dentre as inúmeras tarefas atribuidas a mim, no setor de gestão do E-commerce da loja, eu tive esse contato com a web utilizando o framework Wix.
      </p>
    </div>
  );
}