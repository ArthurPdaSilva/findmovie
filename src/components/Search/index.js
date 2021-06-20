import React, {useState, useContext} from 'react';
import { MovieContext } from '../../contexts/movie';
import api from '../../services/api';
import { toast } from 'react-toastify';
import './search.css';

export default function Search() {
    const [field, setField] = useState('');
    const {setMovie, key} = useContext(MovieContext);
    

    async function searchMovie(){
        if(field === ''){
            toast.error('Digite o nome do filme, primeiro!')
            return;
        }
        
        const response = await api.get(`?t=${field}&apikey=${key}`)
        setMovie([response.data]);
        setField('');
    }

    return (
        <div className="search">
            <h1>Buscar Filme</h1>
            <p>Digite o Nome de algum Filme em inglês, buscar a sinopse do mesmo</p>

            <input type="text" value={field} onChange={(e) => {setField(e.target.value)}}/>
            <button onClick={searchMovie} className="btnSearch">Buscar Filmes</button>
        </div>
    );
}