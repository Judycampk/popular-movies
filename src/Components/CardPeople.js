const CardPeople = (props) => {
    return ( 
         <div className="card p-0 m-2" style={{ width: "12rem" }}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + props.url}
            />
            <div className="card-body">
              <div className="">
              </div>
              <h5 className="card-title">{props.title}</h5>
          </div>
      </div>
     );
}
 
export default CardPeople;