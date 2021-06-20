import {useState, createContext} from 'react';

export const MovieContext = createContext({});

export default function MovieProvider({children}){
    const [movie, setMovie] = useState([]);
    const key = '887239fd';

    return(
        <MovieContext.Provider value={{movie, setMovie, key}}>
            {children}
        </MovieContext.Provider>
    )
}