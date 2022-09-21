import React from 'react';
import './Country.css'

const Country = (props) => {

    const {flags , name , population} = props.country;

    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img className='flag' src={flags.png} alt="" />
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;