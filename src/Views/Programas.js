import React, { useState, useEffect } from 'react';
import CardTvShows from '../Components/CardTvShows';

const Programas = () => {
    const [shows,setShows] = useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then(response=>response.json())
        .then(data=>setShows(data.results));
        
    },[])

    return ( <div>
        <div className="container-fluid foto d-flex">
            <div className="ms-5 ps-5">
            <div className="row">
        {shows.map(item=><CardTvShows key={item.id} title={item.original_name} url={item.poster_path} vote={item.vote_average} date={item.first_air_date} id={item.id}/>)}
        </div>
            </div>
        </div> 
    </div> );
}
 
export default Programas;