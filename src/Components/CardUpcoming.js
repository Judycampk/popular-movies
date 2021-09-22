
const CardUpcoming = (props) => {
  // console.log(props);
    return (
        <div className="card p-0 mt-5 bg-transparent me-5 border-0 figure" style={{ width: "13rem" }}>
          <img src={"https://image.tmdb.org/t/p/w500/" + props.url} className="card-img-top" alt="..." />
          <div className="card-body m-0 p-0">
            {/* <p>{props.info}</p> */}
          </div>
        </div>
    );
}
 
export default CardUpcoming;