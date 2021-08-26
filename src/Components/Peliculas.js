import React, { useState, useEffect } from 'react';
import CardMovies from './CardMovies';

const Peliculas = () => {

    const[movies,setMovies] = useState([]);
    // console.log(movies);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=5bd9605104aac85194f3346593a25044')
        .then(response=>response.json())
        .then(data=>setMovies(data.results));

    },[])

    return ( 
        <div className="container d-flex">
            <div className="row">
        {movies.map(item=><CardMovies title={item.original_title} url={item.poster_path} vote={item.vote_average} date={item.release_date}/>)}
            </div>
        </div> 
    );
}
 
export default Peliculas;