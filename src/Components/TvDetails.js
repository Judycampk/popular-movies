import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const TvDetails = () => {

    const{id} = useParams ();
    const[TvDetails,setTvDetails]= useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then((response)=>response.json())
        .then(data=>setTvDetails(data));
    },[])   
    console.log(TvDetails);
    return (
        <div class="card bg-dark text-white">
        <img
          src={
            "https://image.tmdb.org/t/p/original" + TvDetails.backdrop_path
          }
          className="card-img"
          alt="..."
        />
        <div class="card-img-overlay h-50 bg-dark bg-opacity-75 m-5">
          <div className="row">
            <div className="col-6">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" +
                  TvDetails.backdrop_path
                }
                alt=""
                className="card-img"
              />
            </div>
            <div className="col-6">
              <h5 className="card-title mb-4 mt-2">{TvDetails.name}</h5>
              <p className="card-text">{TvDetails.overview}</p>
              <p className="m-0">Vote</p>
              <p className="card-text text-warning fs-6 fw-bold">{TvDetails.vote_average}</p>
              <Link to="/programas"><button type="button" className="btn btn-outline-danger">Volver</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default TvDetails;