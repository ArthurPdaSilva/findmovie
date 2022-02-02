import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Favorites from '../pages/Favorites'
import About from '../pages/About';
import Description from '../pages/Description';
import Error from '../pages/Error';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/description/:id' element={<Description/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}