import React, {useState, useEffect} from 'react';
import './App.css';

import { FormControl, Select, MenuItem } from '@material-ui/core';


const url ='https://disease.sh/v3/covid-19/countries' ;

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'Canada', 'Poland']);

  useEffect(()=>{
    const getCountries = async () => {
      const res = await fetch(url);

      if(!res.ok){
        throw new Error(`Could not fetch ${url}, recived ${res.status}`)
      }

      return await res.json(); 
    }
    getCountries();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 tracker</h1>
        
        <FormControl className="app__dropdown">
          <Select
              variant='outlined'
              value='abc'
            >
            {countries.map(country => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      


      {/* Header */}
        {/* Title + Select input dropdown field */}
      
      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}

    </div>
  );
}

export default App;
