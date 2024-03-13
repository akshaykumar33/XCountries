/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './FlagList.css'
function FlagsList() {
    const [countries, setCountries] = useState([]);
    const[search,setSearch]=useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((err) => console.log("Error fetching Countries Flag", err));
    }, []);

    return (
        <div className='container'>
            <div className="card" >
             <input type="text" value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Enter Countries to Search...' />
            </div>
            {countries.filter((name)=>name.name.common.toLowerCase().includes(search)).map((country, id) => (
                <div className="countryCard" key={id}>
                    <img src={country.flags.png} alt={country.name.common} style={{width:'9em',height:'7em'}} />
                    <span>{country.name.common}</span>
                </div>
            ))}
        </div>
    );
}

export default FlagsList;
