
import './Countries.css';
import { useState, useEffect } from 'react';
import propTypes from 'react';
import axios from 'axios';


const Tile = (props)=>{ 

    return(
        <div className="card">
            <img className='cardImg' src={props.src} alt={props.alt} />
            <h4>{props.name}</h4>
        </div>
    )
}


const Cards = ()=>{
    const [countires, setCountries] = useState([]);
    // const API_URL = "https://restcountries.com/v3.1/all";

    useEffect(()=>{
        // fetch(API_URL)
        // .then((response)=>response.json())
        // .then((data)=>setCountries(data))

        axios.get("https://restcountries.com/v3.1/all")
        .then(res=>setCountries(res.data))
        .catch(err=>console.log(err));

    },[])

console.log(countires);

    return(
        <div className="cards-container">
            {countires.map((country)=><Tile key={country.cca3} src={country.flags.png} alt={country.flags.alt} name={country.name.common} />)}
        </div>
    )
}

Tile.propTypes = {
    src:propTypes.string,
    alt:propTypes.string,
    name:propTypes.string
}

export default Cards;