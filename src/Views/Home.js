import React, { useState,useEffect } from 'react';
import Carousel from '../Components/Carousel';
import Upcoming from './Upcoming';


const Home = () => {

    const[home,setHome] = useState([]);
    // console.log(home);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then(response => response.json())
        .then(data => setHome(data.results));

    },[])

    return (
      <>
        <div className="row">
          <div className="container-fluid ps-0 pe-0 border-0">
            <Carousel home={home} />
          </div>
          <div className="container-fluid gradient ps-5">
            <h3 className="mt-5 mb-0">Upcoming</h3>
            <Upcoming />
          </div>
        </div>
      </>
    );
}
 
export default Home;