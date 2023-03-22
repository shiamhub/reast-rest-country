import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    // console.log(countries)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])

    return (
        <div>
            <h2>Hello Form Countries: {countries.length}</h2>
            <div className='country-container'>
            {
                countries.map(country => <Country
                    country={country}
                    key={country.cca3}
                    // name={country.name.common} 
                    // population={country.population}
                    // area={country.area}
                    // region={country.region}
                    // flags={country.flags.png}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;