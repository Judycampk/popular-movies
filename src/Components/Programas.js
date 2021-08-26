import React, { useState, useEffect } from 'react';
import CardTvShows from './CardTvShows';

const Programas = () => {
    const [shows,setShows] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=5bd9605104aac85194f3346593a25044')
        .then(response=>response.json())
        .then(data=>setShows(data.results));
        
    },[])

    return ( <div>
        <div className="container d-flex">
            <div className="row">
        {shows.map(item=><CardTvShows title={item.original_name} url={item.poster_path} vote={item.vote_average} date={item.first_air_date}/>)}
            </div>
        </div> 
    </div> );
}
 
export default Programas;