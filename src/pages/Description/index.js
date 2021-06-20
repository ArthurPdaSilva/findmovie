import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import { MovieContext } from '../../contexts/movie';
import { toast } from 'react-toastify';
import api from '../../services/api';
import './description.css';

export default function Description() {
    const {movie, setMovie, key} = useContext(MovieContext);
    const [loading, setLoading] = useState(true); 
    const {id} = useParams();

    useEffect(() => {
        async function loading(){
            const response = await api.get(`?t=${id}&apikey=${key}`)
            setMovie([response.data]);
            setLoading(false);
        }

        loading();
    }, [id, key, setMovie]);

    function saveMovie(){
        const list = localStorage.getItem('movies');
        // Trasnforma Json em object
        let favoriteList = JSON.parse(list) || [];

        const hasMovie = favoriteList.includes(movie.map(item => item.Title).toString());

        // console.log(favoriteList.map((item) => item));

        if(hasMovie){
            toast.error('Filme Já salvo');
            return;
        }

        favoriteList.push(movie.map(item => item.Title).toString());
        // Transforma object em json
        localStorage.setItem('movies', JSON.stringify(favoriteList));
        toast.success('Filme Salvo com sucesso');
    }

    if(loading){
        return( 
            <div className="principal">
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <div className="principal">
            {movie.map((item) => {
                return(
                    <div key={item.imdbID}>
                        <h1>{item.Title}</h1>
                        <img src={item.Poster} alt={item.imdbID}/>
                        <h2>Sinopse</h2> 
                        <p>{item.Plot}</p>
                        <p className="group">
                            <span>Ano: </span>{item.Year ? item.Year : 'Não Informada'}<br/>
                            <span>Duração: </span>{item.Runtime ? item.Runtime : 'Não Informada'}<br/>
                            <span>Gênero: </span>{item.Genre ? item.Genre : 'Não Informada'}
                        </p>
                        <div className="buttons">
                            <button onClick={saveMovie}>Salvar</button>
                            <a href={`https://www.youtube.com/results?search_query=${item.Title}+trailer`} target="blank">Trailer</a>
                        </div>
                    </div>
                ); 
            })}
        </div>
    );
}