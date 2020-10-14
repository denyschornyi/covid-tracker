import React, {useState, useEffect} from 'react';
import './App.css';

import { FormControl, Select, MenuItem } from '@material-ui/core';

import InfoBox from './InfoBox';

const url ='https://disease.sh/v3/covid-19/countries' ;

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountries = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map(country => ({
              name: country.country,
              value: country.countryInfo.iso3,
          }));
          setCountries(countries);
        });
    };
    getCountries();
  }, []);

  const onCounryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 tracker</h1>
        
        <FormControl className="app__dropdown">
          <Select
              variant='outlined'
              value={country}
              onChange={onCounryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      
      <div className="app__stats">
        <InfoBox title='Coronavirus cases' cases={12} total={12313}/>
        <InfoBox title='Recovered' cases={123} total={12313}/>
        <InfoBox title='Deaths' cases={123} total={12313}/>
      </div>


      {/* Table */}
      {/* Graph */}

      {/* Map */}

    </div>
  );
}

export default App;
