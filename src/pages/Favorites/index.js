import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './favorites.css';

export default function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem('movies');
        setMovies(JSON.parse(myList) || []);
    }, [])

    function deleteItem(){}

    return (
        <div className="favoritesContainer">
            <h1>Meus Filmes</h1>
            
            <ul>
                {movies.map((item) => {
                    return(
                        <li key={item}>
                            <span>{item}</span>

                            <div className="btnGroup">
                                <Link to={`/description/${item}`}>Ver Detalhes</Link>
                                <button onClick={deleteItem}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}