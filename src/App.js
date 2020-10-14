import React, {useState, useEffect} from 'react';
import './App.css';

import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';

import InfoBox from './InfoBox';
import Map from './Map';
const url ='https://disease.sh/v3/covid-19/countries' ;

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [ countryInfo, setCountryInfo] = useState({}); 

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

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((res) =>  res.json())
      .then((data) => {
        setCountryInfo(data); 
      })
  }, [])

  const onCounryChange = async (event) => {
    const countryCode = event.target.value;

    const url = countryCode === 'worldwide' 
                ?  'https://disease.sh/v3/covid-19/all' 
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    
                
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data); 
      })
  }
  console.log(countryInfo);
  return (
    <div className="app">
      <div className="app__left">
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
                <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        
        <div className="app__stats">
          <InfoBox title='Coronavirus cases' cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <InfoBox title='Recovered' cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoBox title='Deaths' cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        </div>

        <Map  />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Coutry</h3>
          {/* Table */}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
