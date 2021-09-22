import React, { useState, useEffect } from 'react';
import CardPeople from '../Components/CardPeople';

const Personas = () => {
    const[people,setPeople] = useState([]);
    console.log(people);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then(response=>response.json())
        .then(data=>setPeople(data.results));
    },[])

    return ( 
    <div className="container-fluid ps-5 d-flex gradiente2">
        <div className="row">
        {people.map(item=><CardPeople key={item.id} title={item.name} url={item.profile_path} id={item.id}/>)}
        </div>
    </div> 
    );
}
 
export default Personas;