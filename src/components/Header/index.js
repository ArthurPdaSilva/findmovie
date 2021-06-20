import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
    return (
        <header>
            <Link to='/'>Página Inicial</Link>
            <Link to='/favorites'>Favoritos</Link>
            <Link to='/login'>Fazer Login</Link>
            <Link to='/about'>Sobre Mim</Link>
        </header>
    );
}