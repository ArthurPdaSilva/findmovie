import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './favorites.css';

export default function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem('movies');
        setMovies(JSON.parse(myList) || []);
    }, [])

    const deleteItem = useCallback((id) => {
        let filterMovie = movies.filter((item) => {
            return (item !== id);
        })
        
        localStorage.setItem('movies', JSON.stringify(filterMovie));
        setMovies(filterMovie);
        toast.success('Filme Excluído com sucesso');
    }, [movies]);

    return (
        <div className="favoritesContainer">
            <h1>Meus Filmes</h1>
            {movies.length === 0 && <h1>Você não possui filme salvo.</h1>}
            <ul>
                {movies.map((item) => (
                    <li key={item}>
                        <span>{item}</span>
                        <div className="btnGroup">
                            <Link to={`/description/${item}`}>Detalhes</Link>
                            <button onClick={() => deleteItem(item)}>Excluir</button>
                        </div>
                    </li>
                    ))};
            </ul>
        </div>
    );
}