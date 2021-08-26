const CardTvShows = (props) => {
    return ( 
             <div className="card p-0 m-2" style={{ width: "13rem" }}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + props.url}
            />
            <div className="card-body">
              <div className="">
              <p>{props.vote}</p>
              </div>
              <h5 className="card-title">{props.title}</h5>
              <p>{props.date}</p>
          </div>
      </div>
     );
}
 
export default CardTvShows;