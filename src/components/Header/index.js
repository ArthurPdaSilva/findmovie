import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
    return (
        <header>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favoritos</Link>
            <Link to='/about'>Sobre</Link>
        </header>
    );
}