import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import AllCountries from './Componests/AllCountries/AllCountries';

function App() {
  const [countries, setCountries ] = useState([])
  const [add, setAdd ] = useState([])
  // console.log(countries);
  const display = countries.slice(1, 50);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
    })
  }, [])
// console.log(display);
 const eventListener = (country) => {
   
   const newAdd = [...add, country]
   setAdd(newAdd)
 }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Total Countries:{countries.length}</h1>
  <h3>add country : {add.length}</h3>
     {display.map(show => <AllCountries show={show} eventListener={eventListener} key={show.alpha3Code}></AllCountries> )}

    
      </header>
    </div>
  );
}

export default App;
