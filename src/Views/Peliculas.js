import React, { useState, useEffect } from 'react';
import CardMovies from '../Components/CardMovies';

const Peliculas = () => {

    const[movies,setMovies] = useState([]);
    // console.log(movies);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then(response=>response.json())
        .then(data=>setMovies(data.results));

    },[])

    return ( 
        <div className="container-fluid kenburns-top">
        <div className="d-flex ms-5 ps-5">
            <div className="row">
        {movies.map(item=><CardMovies key={item.id} title={item.original_title} url={item.poster_path} vote={item.vote_average} date={item.release_date} id={item.id} />)}
            </div>
        </div>
        </div>
    );
}
 
export default Peliculas;