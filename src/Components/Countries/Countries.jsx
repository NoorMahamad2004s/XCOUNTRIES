
import './Countries.css';
import { useState, useEffect } from 'react';
import propTypes from 'react';
import axios from 'axios';


const Tile = (props)=>{ 

    return(
        <div className="countryCard">
            <img className='cardImg' src={props.src} alt={props.alt} />
            <h2>{props.name}</h2>
        </div>
    )
}


const Cards = ()=>{
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');




    // const API_URL = "https://restcountries.com/v3.1/all";

    useEffect(()=>{
        // fetch(API_URL)
        // .then((response)=>response.json())
        // .then((data)=>setCountries(data))

        axios.get("https://restcountries.com/v3.1/all")
        .then(res=>setCountries(res.data))
        .catch(err=>console.log(err));

    },[])

    const handleSearch = (event)=>{
        setSearchTerm(event.target.value)
    }


    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        
        <div>
            <div className="searchContainer">
             <input
                className='search'
                type="text"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={handleSearch}
            />
            </div>
            <div className="cards-container">
            {filteredCountries.map((country)=><Tile key={country.cca3} src={country.flags.png} alt={country.flags.alt} name={country.name.common} />)}
        </div>
    </div>
    )
}

Tile.propTypes = {
    src:propTypes.string,
    alt:propTypes.string,
    name:propTypes.string
}

export default Cards;