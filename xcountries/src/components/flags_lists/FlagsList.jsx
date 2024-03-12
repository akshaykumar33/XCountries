/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './FlagList.css'
function FlagsList() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((err) => console.log("Error fetching Countries Flag", err));
    }, []);

    return (
        <div className='container'>
            {countries.map((country, id) => (
                <div className="card" key={id}>
                    <img src={country.flags.png} alt={country.name.common} style={{width:'15em',height:'10em'}} />
                    <h6>{country.name.common}</h6>
                </div>
            ))}
        </div>
    );
}

export default FlagsList;
