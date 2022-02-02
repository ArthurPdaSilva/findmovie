import React, {useContext} from 'react';
import { MovieContext } from '../../contexts/movie';
import { Link } from 'react-router-dom';
import './result.css';

export default function Result() {
    const {movie} = useContext(MovieContext);
    
    return (
        <div className="result">
            {movie.map((item) => (
                <div key={item.imdbID}>
                    <h1>Título: {item.Title}</h1>
                    <img src={item.Poster} alt={item.imdbID} className='imgBack'/>
                    <Link to={`/description/${item.Title}`} className="btn">Ver Detalhes</Link>
                </div>
            ))}
        </div>
    );
}