import React from 'react';
import './AllCountries.css'
const AllCountries = (props) => {
    const {name, flag, population, region,capital} =props.show
    const eventListener = props.eventListener;
    return (
        <div className="country">
           
            <div className="flag">
                <h3>Country flag</h3>
            <img src={flag} alt=""/>
            </div>
            <div className="details">
            <h4>Country Name : {name}</h4>
           <p>population: {population}</p>
             {props.show.languages.map(re => <p> languages : {re.nativeName}</p>)}
            <p>capital : {capital}</p> 
             <p>Region: {region}</p>  
        <button onClick={() => eventListener(props.country)}>add me</button>
            </div>
        </div>
    );
};

export default AllCountries;