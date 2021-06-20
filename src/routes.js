import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Favorites from './pages/Favorites'
import Login from './pages/Login';
import About from './pages/About';
import Description from './pages/Description';
import Error from './pages/Error';


// Components
import Header from './components/Header';
import Footer from './components/Footer';

export default function Routes() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/description/:id' component={Description}/>
            <Route exact path='/favorites' component={Favorites}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/about' component={About}/>
            <Route path='*' component={Error}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
}