
const CardTendring = (props) => {
  // console.log(props);
    return (
        <div className="card p-0 mt-5 bg-transparent me-4 figure" style={{ width: "10rem" }}>
          <img src={"https://image.tmdb.org/t/p/w500/" + props.url} className="card-img-top" alt="..." />
          <div className="card-body m-0 p-0">
          </div>
        </div>
    );
}
 
export default CardTendring;