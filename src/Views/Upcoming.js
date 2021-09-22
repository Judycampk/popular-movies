import React, { useState,useEffect } from 'react';
import CardUpcoming from '../Components/CardUpcoming';


const Upcoming = () => {

    const [upcoming,setUpcoming] = useState([]);
    console.log(upcoming);

    useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then(response=>response.json())
        .then(data=>setUpcoming(data.results));
    },[])

    return (
      <div className="container-fluid">
        <div className="d-flex">
          <div className="row">
            {upcoming.map((item) => (
              <CardUpcoming
                key={item.id}
                title={item.original_title}
                url={item.poster_path}
                id={item.id}
                info={item.overview}
              />
            ))}
          </div>
        </div>
        </div>
      
    );
}
 
export default Upcoming;