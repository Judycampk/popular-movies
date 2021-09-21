import { Link } from "react-router-dom";
const CardTvShows = (props) => {
    return ( 
             <div className="card p-0 m-2 bg-transparent border-0 gray" style={{ width: "13rem" }}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + props.url}
            />
            <div className="card-body">
            <Link to={"/programas/"+props.id} className="link-danger" style={{ textDecoration: 'none' }}><h5 className="card-title fs-5 fw-bold">{props.title}</h5></Link>
          </div>
      </div>
     );
}
 
export default CardTvShows;