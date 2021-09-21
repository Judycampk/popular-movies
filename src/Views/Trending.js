import React, { useState,useEffect } from 'react';
import CardTendring from '../Components/CardTrending';


const Trending = () => {

    const [trends,setTrends] = useState([]);
    console.log(trends);

    useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then(response=>response.json())
        .then(data=>setTrends(data.results));
    },[])

    return (
      <div className="container-fluid">
        <div className="d-flex">
          <div className="row">
            {trends.map((item) => (
              <CardTendring
                key={item.id}
                title={item.original_title}
                url={item.poster_path}
              />
            ))}
          </div>
        </div>
      </div>
    );
}
 
export default Trending;