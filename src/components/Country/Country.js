import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {region, flags} = props.country
    return (
        <div className='country'>
            <h2>Country Name: {props.country.name.common}</h2>
            <img src={flags.png} alt="" />
            <p>population: {props.country.population}</p>
            <p>Area: {props.country.area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;