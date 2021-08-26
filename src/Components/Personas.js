import React, { useState, useEffect } from 'react';
import CardPeople from './CardPeople';

const Personas = () => {
    const[people,setPeople] = useState([]);
    console.log(people);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/person/popular?api_key=5bd9605104aac85194f3346593a25044')
        .then(response=>response.json())
        .then(data=>setPeople(data.results));
    },[])

    return ( 
    <div className="container d-flex">
        <div className="row">
        {people.map(item=><CardPeople title={item.name} url={item.profile_path}/>)}
        </div>
    </div> 
    );
}
 
export default Personas;